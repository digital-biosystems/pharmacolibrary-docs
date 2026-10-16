<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;cetuximab&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Cetuximab_Cognetti2026_reference&quot;,&quot;label&quot;:&quot;Cognetti_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_cetuximab/Cetuximab_Cognetti2026_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Cetuximab_Pointreau2016_reference&quot;,&quot;label&quot;:&quot;Pointreau_2016_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_cetuximab/Cetuximab_Pointreau2016_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Cetuximab_Yang2026_reference&quot;,&quot;label&quot;:&quot;Yang_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_cetuximab/Cetuximab_Yang2026_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Lin_2011_Ct_2&quot;,&quot;label&quot;:&quot;Lin_2011 \u00b7 Ct&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_cetuximab/pd_Lin_2011_Ct_2.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# cetuximab

- **generic name:** cetuximab
- **ATC codes:** `L01FE01`
- **DrugBank:** [DB00002](https://go.drugbank.com/drugs/DB00002) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Cetuximab is a monoclonal antibody used to treat several cancers, mainly head and neck cancers and colorectal cancers. It is approved and authorised in the European Union, and is also being investigated for other uses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q420296](https://www.wikidata.org/wiki/Q420296) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-14 19:00 | 16:37 | 2/6/7 | 5/0/1 | 2/0/5 | 1,480,733/56,287 | einfracz / qwen3.8-27b | 61 | 10/51 | 58/3 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--orange" title="re-read by qwen3.8-27b (partly confirmed, agreement 0.778). Primary extraction retained.">cross-check: partial</span> | [Cognetti_2026_reference](drugs/drug_cetuximab/Cetuximab_Cognetti2026_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Cognetti DM et al., Safety and Efficacy Findings From a Pha…, Head & neck (2026) | [10.1002/hed.70014](https://doi.org/10.1002/hed.70014) |
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.267). Primary extraction retained.">cross-check: disputed</span> | [Pointreau_2016_reference](drugs/drug_cetuximab/Cetuximab_Pointreau2016_reference.md) | ▶ model + simulator | 2-compartment, IV | 5 | Pointreau Y et al., Cetuximab Pharmacokinetics Influences O…, Therapeutic drug monitoring (2016) | [10.1097/FTD.0000000000000321](https://doi.org/10.1097/FTD.0000000000000321) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by qwen3.8-27b (partly confirmed, agreement 0.833). Primary extraction retained.">cross-check: partial</span><br><sub>blocking: disposition incomplete — volume from this paper; review-gap-filled from other p…</sub><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q63, Q30, Q64 — no SI value to buil…</sub><br><sub>route_to: `human_review`</sub> | [Grisic_2020_lcl](drugs/drug_cetuximab/Cetuximab_Grisic2020_lcl.md) | — | 2-compartment (no model) | 4 | Grisic AM et al., Semimechanistic Clearance Models of Onc…, CPT: pharmacometrics & syst… (2020) | [10.1002/psp4.12558](https://doi.org/10.1002/psp4.12558) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by qwen3.8-27b (partly confirmed, agreement 0.9). Primary extraction retained.">cross-check: partial</span><br><sub>blocking: disposition incomplete — volume from this paper; review-gap-filled from other p…</sub><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q66 — no SI value to build from</sub><br><sub>route_to: `human_review`</sub> | [Grisic_2020_mmcl](drugs/drug_cetuximab/Cetuximab_Grisic2020_mmcl.md) | — | 2-compartment (no model) | 6 | Grisic AM et al., Semimechanistic Clearance Models of Onc…, CPT: pharmacometrics & syst… (2020) | [10.1002/psp4.12558](https://doi.org/10.1002/psp4.12558) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by qwen3.8-27b (partly confirmed, agreement 0.9). Primary extraction retained.">cross-check: partial</span><br><sub>blocking: disposition incomplete — volume from this paper; review-gap-filled from other p…</sub><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q66 — no SI value to build from</sub><br><sub>route_to: `human_review`</sub> | [Grisic_2020_mmcl_lcl](drugs/drug_cetuximab/Cetuximab_Grisic2020_mmcl_lcl.md) | — | 2-compartment (no model) | 6 | Grisic AM et al., Semimechanistic Clearance Models of Onc…, CPT: pharmacometrics & syst… (2020) | [10.1002/psp4.12558](https://doi.org/10.1002/psp4.12558) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by qwen3.8-27b (partly confirmed, agreement 0.818). Primary extraction retained.">cross-check: partial</span><br><sub>blocking: disposition incomplete — volume from this paper; review-gap-filled from other p…</sub><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q63, Q30, Q64, Q1, Q66, Q57, Q56 —…</sub><br><sub>route_to: `human_review`</sub> | [Grisic_2020_mmcl_tvarcl](drugs/drug_cetuximab/Cetuximab_Grisic2020_mmcl_tvarcl.md) | — | 2-compartment (no model) | 8 | Grisic AM et al., Semimechanistic Clearance Models of Onc…, CPT: pharmacometrics & syst… (2020) | [10.1002/psp4.12558](https://doi.org/10.1002/psp4.12558) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--green" title="re-read by qwen3.8-27b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span><br><sub>blocking: C6_cl_magnitude failed (ratio None)</sub><br><sub>route_to: `human_review`</sub> | [Liu_2026_reference](drugs/drug_cetuximab/Cetuximab_Liu2026_reference.md) | — | 1-compartment (no model) | 2 | Liu T et al., Advances in Therapeutic Drug Monitoring…, Clinical interventions in a… (2026) | [10.2147/cia.s587530](https://doi.org/10.2147/cia.s587530) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by qwen3.8-27b (partly confirmed, agreement 0.364). Primary extraction retained.">cross-check: partial</span><br><sub>blocking: disposition incomplete — clearance/elimination from this paper; review-gap-fill…</sub><br><sub>route_to: `human_review`</sub> | [Lobet_2023_reference](drugs/drug_cetuximab/Cetuximab_Lobet2023_reference.md) | — | 1-compartment (no model) | 4 | Lobet S et al., Relationship Between Cetuximab Target-M…, Clinical pharmacokinetics (2023) | [10.1007/s40262-023-01270-2](https://doi.org/10.1007/s40262-023-01270-2) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by qwen3.8-27b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span><br><sub>blocking: unreported model parameter default(s): ka</sub><br><sub>route_to: `scholar`</sub> | [Yang_2026_reference](drugs/drug_cetuximab/Cetuximab_Yang2026_reference.md) | ▶ model + simulator | 1-compartment, oral | 2 | Yang DZ et al., Population Pharmacokinetic Modeling of…, Clinical pharmacokinetics (2026) | [10.1007/s40262-025-01608-y](https://doi.org/10.1007/s40262-025-01608-y) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Augustin_2026_reference](drugs/drug_cetuximab/Cetuximab_Augustin2026_reference.md) | — | 2-compartment (no model) | 3 | Augustin A et al., Translational strategy to support the f…, Frontiers in immunology (2026) | [10.3389/fimmu.2026.1736584](https://doi.org/10.3389/fimmu.2026.1736584) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--green" title="re-read by qwen3.8-27b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Azzopardi_2011_reference](drugs/drug_cetuximab/Cetuximab_Azzopardi2011_reference.md) | — | 2-compartment (no model) | 5 | Azzopardi N et al., Cetuximab pharmacokinetics influences p…, Clinical cancer research :… (2011) | [10.1158/1078-0432.CCR-11-1081](https://doi.org/10.1158/1078-0432.CCR-11-1081) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.5). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Delbaldo_2005_reference](drugs/drug_cetuximab/Cetuximab_Delbaldo2005_reference.md) | — | 1-compartment (no model) | 0 | Delbaldo C et al., Pharmacokinetic profile of cetuximab (E…, European journal of cancer… (2005) | [10.1016/j.ejca.2005.04.029](https://doi.org/10.1016/j.ejca.2005.04.029) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by qwen3.8-27b (partly confirmed, agreement 0.444). Primary extraction retained.">cross-check: partial</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Dirks_2008_reference](drugs/drug_cetuximab/Cetuximab_Dirks2008_reference.md) | — | 3-compartment (no model) | 5 | Dirks NL et al., Population pharmacokinetics of cetuxima…, Journal of clinical pharmac… (2008) | [10.1177/0091270007313393](https://doi.org/10.1177/0091270007313393) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--green" title="re-read by qwen3.8-27b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Le_2019_reference](drugs/drug_cetuximab/Cetuximab_Le2019_reference.md) | — | 1-compartment (no model) | 0 | Le Louedec F et al., Cetuximab pharmacokinetic/pharmacodynam…, British journal of clinical… (2019) | [10.1111/bcp.13907](https://doi.org/10.1111/bcp.13907) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--green" title="re-read by qwen3.8-27b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Wang_2011_reference](drugs/drug_cetuximab/Cetuximab_Wang2011_reference.md) | — | 1-compartment (no model) | 0 | Wang C et al., Phase 1 study of anti-epidermal growth…, mAbs (2011) | [10.4161/mabs.3.1.14021](https://doi.org/10.4161/mabs.3.1.14021) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.50).">human + animal</span> | [Baaz_2022_V](drugs/drug_cetuximab/pd_Baaz_2022_V.md) | Tumor volume ← Cetuximab · direct linear effect | — | Baaz M et al., Optimized scaling of translational fact…, Cancer chemotherapy and pha… (2022) | [10.1007/s00280-022-04458-8](https://doi.org/10.1007/s00280-022-04458-8) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 0.00).">in vitro</span> | [Lin_2011_Ct](drugs/drug_cetuximab/pd_Lin_2011_Ct.md) | cell counts ← cetuximab · disease-progression model | — | Lin HY et al., Pharmacodynamic modeling of anti-cancer…, PLoS computational biology (2011) | [10.1371/journal.pcbi.1001073](https://doi.org/10.1371/journal.pcbi.1001073) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Mellstedt_2003_tumor_response](drugs/drug_cetuximab/pd_Mellstedt_2003_tumor_response.md) | tumor response ← cetuximab · model not identified | — | Mellstedt H, Monoclonal antibodies in human cancer, Drugs of today (Barcelona,… (2003) | — |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 0.00).">in vitro</span> | [Patel_2010_ADCC](drugs/drug_cetuximab/pd_Patel_2010_ADCC.md) | ADCC ← cetuximab · stimulation effect | — | Patel D et al., IgG isotype, glycosylation, and EGFR ex…, Human antibodies (2010) | [10.3233/HAB-2010-0232](https://doi.org/10.3233/HAB-2010-0232) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 0.00).">in vitro</span> | [Patel_2010_Fc_receptor_binding](drugs/drug_cetuximab/pd_Patel_2010_Fc_receptor_binding.md) | Binding to human Fc receptors ← cetuximab · stimulation effect | — | Patel D et al., IgG isotype, glycosylation, and EGFR ex…, Human antibodies (2010) | [10.3233/HAB-2010-0232](https://doi.org/10.3233/HAB-2010-0232) |
| <span class="pk-badge pk-badge--green">accepted (caveats)</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 0.00).">in vitro</span> | [Pekar_2021_AKT](drugs/drug_cetuximab/pd_Pekar_2021_AKT.md) | AKT phosphorylation biomarker turnover ← Cetuximab | — | Pekar L et al., Milking the Cow: Cattle-Derived Chimeri…, Frontiers in immunology (2021) | [10.3389/fimmu.2021.742418](https://doi.org/10.3389/fimmu.2021.742418) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 0.00).">in vitro</span> | [Lin_2011_Ct_2](drugs/drug_cetuximab/pd_Lin_2011_Ct_2.md) | cell counts ← cetuximab · direct Emax (saturable) effect | ▶ model + simulator | Lin HY et al., Pharmacodynamic modeling of anti-cancer…, PLoS computational biology (2011) | [10.1371/journal.pcbi.1001073](https://doi.org/10.1371/journal.pcbi.1001073) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Seurat_2020_TS](drugs/drug_cetuximab/pd_Seurat_2020_TS.md) | tumor size ← cetuximab · target-mediated drug disposition | — | Seurat J et al., Comparison of Various Phase I Combinati…, CPT: pharmacometrics & syst… (2020) | [10.1002/psp4.12564](https://doi.org/10.1002/psp4.12564) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="Adverse-reaction risk allele; no quantitative PK/PD parameter effect.">safety allele</span> | **DPYD** | `safety` — adverse-reaction risk (HLA / safety allele) — no parameter shift | safety_allele | [Scarabel_2022](drugs/drug_cetuximab/pgx_Scarabel_2022_DPYD_safety.md) | Scarabel L et al., Pharmacogenetics Role of Genetic Varian…, Pharmaceutics (2022) | [10.3390/pharmaceutics14112468](https://doi.org/10.3390/pharmaceutics14112468) |
| <span class="pk-badge pk-badge--neutral" title="Adverse-reaction risk allele; no quantitative PK/PD parameter effect.">safety allele</span> | **UGT1A1** | `safety` — adverse-reaction risk (HLA / safety allele) — no parameter shift | safety_allele | [Scarabel_2022](drugs/drug_cetuximab/pgx_Scarabel_2022_UGT1A1_safety.md) | Scarabel L et al., Pharmacogenetics Role of Genetic Varian…, Pharmaceutics (2022) | [10.3390/pharmaceutics14112468](https://doi.org/10.3390/pharmaceutics14112468) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM popPK screen).">mouse</span> | **FCGR3A** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Kohrt_2014](drugs/drug_cetuximab/pgx_Kohrt_2014_FCGR3A_Q100.md) | Kohrt HE et al., Targeting CD137 enhances the efficacy o…, The Journal of clinical inv… (2014) | [10.1172/JCI73014](https://doi.org/10.1172/JCI73014) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> | **FCGR2A** | `Q322` · IC50 | target | [Scarabel_2022](drugs/drug_cetuximab/pgx_Scarabel_2022_FCGR2A_Q322.md) | Scarabel L et al., Pharmacogenetics Role of Genetic Varian…, Pharmaceutics (2022) | [10.3390/pharmaceutics14112468](https://doi.org/10.3390/pharmaceutics14112468) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> | **FCGR3A** | `Q322` · IC50 | target | [Scarabel_2022](drugs/drug_cetuximab/pgx_Scarabel_2022_FCGR3A_Q322.md) | Scarabel L et al., Pharmacogenetics Role of Genetic Varian…, Pharmaceutics (2022) | [10.3390/pharmaceutics14112468](https://doi.org/10.3390/pharmaceutics14112468) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> | **IGF1** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | unknown | [Scarabel_2022](drugs/drug_cetuximab/pgx_Scarabel_2022_IGF1_Q100.md) | Scarabel L et al., Pharmacogenetics Role of Genetic Varian…, Pharmaceutics (2022) | [10.3390/pharmaceutics14112468](https://doi.org/10.3390/pharmaceutics14112468) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> | **IL8** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | unknown | [Scarabel_2022](drugs/drug_cetuximab/pgx_Scarabel_2022_IL8_Q100.md) | Scarabel L et al., Pharmacogenetics Role of Genetic Varian…, Pharmaceutics (2022) | [10.3390/pharmaceutics14112468](https://doi.org/10.3390/pharmaceutics14112468) |

<details class="pk-legend"><summary>PGx evidence and model availability</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>Phenotype/genotype-specific effect on a named model parameter (θ).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>Gene–drug association without a quantitative parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>CPIC/DPWG-derived estimate, not a primary-paper estimate.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>Adverse-reaction risk allele; no quantitative PK/PD parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>Phenotype-specific browser simulation and downloadable PGx model available.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>PGx model available; browser simulation unavailable.</td></tr></tbody></table></details>

<details class="legend">
<summary>PGx field definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>gene</code></td><td>Associated gene; papers with multiple genes contribute multiple records.</td></tr><tr><td><code>affects</code></td><td>Target PK/PD parameter (Q-code and name); θ scales its baseline value. Q100 denotes a non-parameter association; safety denotes adverse-reaction risk. PA identifiers indicate ClinPGx/PharmGKB guideline-derived records.</td></tr><tr><td><code>mechanism</code></td><td>Metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>Source-paper identifier and full-record link.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Adverse drug reactions (ADR)

25 reaction(s) reported in 11 paper(s). Read from the full texts by a language model, which also wrote the one-sentence descriptions; each sentence quoted under a reaction was checked to occur in the paper, the rest is not checked by a person. Frequencies are as the papers print them, for their own populations and definitions.

### Cardiovascular

| reaction | description | reported frequency | risk factors | how to watch | source papers |
|---|---|---|---|---|---|
| Tongue edema | Serious adverse event occurring in 1 of 18 patients (5.6%) in the photoimmunotherapy-evaluable population, with a total incidence of 4/19 (21.1%) in the treated population, one instance of which was severe enough to require post-procedure tracheostomy. | 4 (21.1) | — | — | [Cognetti 2026](https://pubmed.ncbi.nlm.nih.gov/40852760) |

<details><summary>Evidence: tongue edema (1)</summary>

> “Five patients experienced serious TEAEs related to ASP‐1929 photoimmunotherapy: ... one had grade 3 dysphagia and tongue edema that required post‐procedure tracheostomy; one had grade 3 tongue edema and grade 2 hypoxia; ... The serious TEAEs dysphagia and tongue edema are local effects of ASP‐1929 photoimmunotherapy” — [Cognetti 2026](https://pubmed.ncbi.nlm.nih.gov/40852760) <sub>(case report)</sub>

</details>

### Eye

| reaction | description | reported frequency | risk factors | how to watch | source papers |
|---|---|---|---|---|---|
| Eye disorders | In patients with EGFR positive refractory colorectal cancer, inhibition of EGFR functions by cetuximab leads to additional side effects including nail and eye disorders. | — | unspecified | — | [Bloch 2025](https://pubmed.ncbi.nlm.nih.gov/41246356) |

<details><summary>Evidence: eye disorders (1)</summary>

> “By inhibiting EGFR functions, additional side effects arise as changes in the scalp and hair growth, xerosis and pruritus, as well as nail and eye disorders (27–29).” — [Bloch 2025](https://pubmed.ncbi.nlm.nih.gov/41246356) <sub>(case series)</sub>

</details>

### Gastrointestinal

| reaction | description | reported frequency | risk factors | how to watch | source papers |
|---|---|---|---|---|---|
| Dysphagia | Dysphagia was reported as a serious treatment-emergent adverse event in 2 out of 19 patients (10.5%) in the treated population, including one patient with grade 3 dysphagia and another with grade 3 dysphagia and tongue edema requiring post-procedure tracheostomy. | each n = 2; 10.5% | — | — | [Cognetti 2026](https://pubmed.ncbi.nlm.nih.gov/40852760) |
| Stomach cramps/ache | Stomach cramps/ache was reported as a non-serious grade 1 or 2 infusion reaction in five patients related to ASP-1929. | five patients | — | — | [Cognetti 2026](https://pubmed.ncbi.nlm.nih.gov/40852760) |

<details><summary>Evidence: dysphagia (1)</summary>

> “The most common serious adverse reactions were dysphagia and tongue edema (each n = 2; 10.5%).” — [Cognetti 2026](https://pubmed.ncbi.nlm.nih.gov/40852760) <sub>(case series)</sub>

</details>

<details><summary>Evidence: stomach cramps/ache (1)</summary>

> “Infusion reactions, all related to ASP‐1929, were reported for five patients and consisted of non‐serious grade 1 or 2 events (rash, itching, back pain, dyspnea, hyperhidrosis, stomach cramps/ache, tightness of throat, fever, myalgia diarrhea, headache, chills, nausea, and vomiting).” — [Cognetti 2026](https://pubmed.ncbi.nlm.nih.gov/40852760) <sub>(case series)</sub>

</details>

### Immune / hypersensitivity

| reaction | description | reported frequency | risk factors | how to watch | source papers |
|---|---|---|---|---|---|
| Hypersensitivity | Epidermal growth factor receptor inhibitors cetuximab and panitumumab, restricted to specific wild-type patients, carry risks of drug resistance and potential hypersensitivity reactions. | — | — | — | [Li 2026](https://pubmed.ncbi.nlm.nih.gov/42505275) |
| Immune-mediated adverse events | In patients with high-risk/very high-risk MDS and newly diagnosed AML treated with sabatolimab + hypomethylating agents, few clinically significant, possible immune-mediated adverse events were observed. | — | — | — | [Xu 2023](https://pubmed.ncbi.nlm.nih.gov/37186155) |

<details><summary>Evidence: hypersensitivity (1)</summary>

> “Epidermal growth factor receptor inhibitors cetuximab and panitumumab are restricted to specific wild-type patients, with risks of drug resistance and potential hypersensitivity reactions.” — [Li 2026](https://pubmed.ncbi.nlm.nih.gov/42505275) <sub>(review)</sub>

</details>

<details><summary>Evidence: immune-mediated adverse events (1)</summary>

> “A phase Ib study (NCT03066648) investigating the safety, tolerability, and efficacy of sabatolimab + hypomethylating agents (HMAs) in patients with high‐risk/very high‐risk MDS and newly diagnosed AML demonstrated a tolerable safety profile with few clinically significant, possible immune‐mediated adverse events (AEs) regardless of the relationship to study treatment.” — [Xu 2023](https://pubmed.ncbi.nlm.nih.gov/37186155) <sub>(case series)</sub>

</details>

### Infection

| reaction | description | reported frequency | risk factors | how to watch | source papers |
|---|---|---|---|---|---|
| Fever | Fever was reported in 5 patients as a non-serious grade 1 or 2 event among the infusion reactions related to ASP‐1929. | — | — | — | [Cognetti 2026](https://pubmed.ncbi.nlm.nih.gov/40852760) |
| Tightness of throat | Tightness of throat was reported as part of infusion reactions in 5 patients receiving ASP-1929, all of which were non-serious grade 1 or 2 events. | — | — | — | [Cognetti 2026](https://pubmed.ncbi.nlm.nih.gov/40852760) |

<details><summary>Evidence: fever (1)</summary>

> “Infusion reactions, all related to ASP‐1929, were reported for five patients and consisted of non‐serious grade 1 or 2 events (rash, itching, back pain, dyspnea, hyperhidrosis, stomach cramps/ache, tightness of throat, fever, myalgia diarrhea, headache, chills, nausea, and vomiting).” — [Cognetti 2026](https://pubmed.ncbi.nlm.nih.gov/40852760) <sub>(case series)</sub>

</details>

<details><summary>Evidence: tightness of throat (1)</summary>

> “Infusion reactions, all related to ASP‐1929, were reported for five patients and consisted of non‐serious grade 1 or 2 events (rash, itching, back pain, dyspnea, hyperhidrosis, stomach cramps/ache, tightness of throat, fever, myalgia diarrhea, headache, chills, nausea, and vomiting).” — [Cognetti 2026](https://pubmed.ncbi.nlm.nih.gov/40852760) <sub>(case report)</sub>

</details>

### Musculoskeletal

| reaction | description | reported frequency | risk factors | how to watch | source papers |
|---|---|---|---|---|---|
| Back pain | Back pain was reported as part of non-serious infusion reactions in five patients treated with ASP-1929 photoimmunotherapy. | 5 patients | — | — | [Cognetti 2026](https://pubmed.ncbi.nlm.nih.gov/40852760) |
| Facial pain | One patient in the study experienced serious treatment-emergent adverse events related to ASP-1929 photoimmunotherapy, specifically grade 3 facial pain. | 1 | — | — | [Cognetti 2026](https://pubmed.ncbi.nlm.nih.gov/40852760) |

<details><summary>Evidence: back pain (1)</summary>

> “Infusion reactions, all related to ASP‐1929, were reported for five patients and consisted of non‐serious grade 1 or 2 events (rash, itching, back pain, dyspnea, hyperhidrosis, stomach cramps/ache, tightness of throat, fever, myalgia diarrhea, headache, chills, nausea, and vomiting).” — [Cognetti 2026](https://pubmed.ncbi.nlm.nih.gov/40852760) <sub>(case series)</sub>

</details>

<details><summary>Evidence: facial pain (1)</summary>

> “Five patients experienced serious TEAEs related to ASP‐1929 photoimmunotherapy: one had grade 3 dysphagia; one had grade 3 dysphagia and tongue edema that required post‐procedure tracheostomy; one had grade 3 tongue edema and grade 2 hypoxia; one had grade 4 laryngeal edema that required post‐procedure tracheostomy; and one had grade 3 facial pain.” — [Cognetti 2026](https://pubmed.ncbi.nlm.nih.gov/40852760) <sub>(case report)</sub>

</details>

### Respiratory

| reaction | description | reported frequency | risk factors | how to watch | source papers |
|---|---|---|---|---|---|
| Dyspnea | Dyspnea was reported as a non-serious grade 1 or 2 event in five patients, associated with ASP-1929 infusion reactions. | 5 patients | — | — | [Cognetti 2026](https://pubmed.ncbi.nlm.nih.gov/40852760) |
| Laryngeal edema | One patient experienced grade 4 laryngeal edema related to photoimmunotherapy, which required post-procedure tracheostomy. | — | — | — | [Cognetti 2026](https://pubmed.ncbi.nlm.nih.gov/40852760) |

<details><summary>Evidence: dyspnea (1)</summary>

> “Infusion reactions, all related to ASP‐1929, were reported for five patients and consisted of non‐serious grade 1 or 2 events (rash, itching, back pain, dyspnea, hyperhidrosis, stomach cramps/ache, tightness of throat, fever, myalgia diarrhea, headache, chills, nausea, and vomiting).” — [Cognetti 2026](https://pubmed.ncbi.nlm.nih.gov/40852760) <sub>(case series)</sub>

</details>

<details><summary>Evidence: laryngeal edema (1)</summary>

> “Two patients experienced grade 4 events: tumor hemorrhage related to advanced disease and laryngeal edema related to photoimmunotherapy. ... one had grade 4 laryngeal edema that required post‐procedure tracheostomy” — [Cognetti 2026](https://pubmed.ncbi.nlm.nih.gov/40852760) <sub>(case report)</sub>

</details>

### Skin

| reaction | description | reported frequency | risk factors | how to watch | source papers |
|---|---|---|---|---|---|
| Rash | One patient at the 900-mg BI-1607 dose experienced a dose-limiting toxicity (grade 3) manifesting as rash, leading to treatment discontinuation. | 1/18 | ASP-1929 photoimmunotherapy | hospital: skin reactions (erythema, pruritus, urticaria, rash) | [Cortés 2025](https://pubmed.ncbi.nlm.nih.gov/41071338), [Xu 2024](https://pubmed.ncbi.nlm.nih.gov/39179622), [Cognetti 2026](https://pubmed.ncbi.nlm.nih.gov/40852760) |
| Skin rash | The paper reports that a pre-specified analysis of the interaction between FCGR2A and FCGR3A polymorphisms and skin rash found no statistically significant interaction. | — | FCGR2A (rs1801274); FCGR3A (rs396991) | — | [Shepshelovich 2018](https://pubmed.ncbi.nlm.nih.gov/30318772), [Scarabel 2022](https://pubmed.ncbi.nlm.nih.gov/36432658) |
| Acne-like skin rash | More than 86% of patients with epidermal growth factor receptor (EGFR) positive refractory colorectal cancer treated with cetuximab in Phase II trials developed acne-like skin rash, with 18% developing grade 3 symptoms. | more than 86% | — | — | [Bloch 2025](https://pubmed.ncbi.nlm.nih.gov/41246356) |
| Acneiform rash | Maximum observed cetuximab-related acneiform rash was grade 2 or 3 in 37 of 58 patients (63.8%), with grade 2 occurring in 28 patients and grade 3 in 9 patients. | 63.8% toxicity grade 2-3 | EGFR intron 1 CA repeats (sum ≤ 35); Male gender | hospital: Maximum observed toxicity grade recorded according to NCI-CTCAE v3.0 | [Dahan 2011](https://pubmed.ncbi.nlm.nih.gov/22117530) |
| Edema | Localized edema at the irradiation site was observed in mice in the iTAP and PDT groups starting the day after light exposure and resolved within several days. | some animals | — | — | [Hamakubo 2026](https://pubmed.ncbi.nlm.nih.gov/41898220) |
| Folliculitis | In the 21 patients with locally advanced head and neck squamous cell carcinoma treated with cetuximab and radiotherapy, 9 patients presented with low-grade folliculitis (grades 0-1) and 12 patients with severe folliculitis (grades 2-3). | Low = 9; Severe = 12 | — | — | [Pointreau 2016](https://pubmed.ncbi.nlm.nih.gov/27631463) |
| Hyperhidrosis | Hyperhidrosis was reported in five patients as part of non-serious grade 1 or 2 infusion reactions related to ASP-1929. | 5 (26.3) | — | — | [Cognetti 2026](https://pubmed.ncbi.nlm.nih.gov/40852760) |
| Itching | Itching was reported as a non-serious grade 1 or 2 event in five patients experiencing infusion reactions related to ASP-1929 photoimmunotherapy. | — | — | — | [Cognetti 2026](https://pubmed.ncbi.nlm.nih.gov/40852760) |
| Pruritus | Pruritus arises as a side effect when cetuximab inhibits EGFR functions, occurring alongside changes in the scalp and hair growth, xerosis, and nail and eye disorders. | — | — | home: pruritus | [Bloch 2025](https://pubmed.ncbi.nlm.nih.gov/41246356) |
| Radiation dermatitis | In the 21 patients with LAHNSCC treated with cetuximab and radiotherapy, 13 patients developed severe radiation dermatitis (grades 3 to 4), while 8 had low toxicity (grades 0 to 2). | Severe = 13 | radiotherapy | — | [Pointreau 2016](https://pubmed.ncbi.nlm.nih.gov/27631463) |
| Scalp and hair growth changes | The paper states that by inhibiting EGFR functions, additional side effects arise as changes in the scalp and hair growth, but it does not specify the patient population, frequency, or specific nature of these changes in the provided text. | — | inhibiting EGFR functions | — | [Bloch 2025](https://pubmed.ncbi.nlm.nih.gov/41246356) |
| Ulceration | In the iTAP group, ulcer formation was observed in one out of five mice beginning on day 6 after irradiation, followed by eschar formation within a few days, which subsequently progressed to complete healing. | one out of five | — | — | [Hamakubo 2026](https://pubmed.ncbi.nlm.nih.gov/41898220) |
| Xerosis | Xerosis is reported as an additional side effect arising in patients treated with cetuximab due to the inhibition of EGFR functions in healthy tissue. | — | — | — | [Bloch 2025](https://pubmed.ncbi.nlm.nih.gov/41246356) |

<details><summary>Evidence: rash (3)</summary>

> “One patient at the 900-mg BI-1607 dose experienced a DLT leading to treatment discontinuation (rash, grade 3).” — [Cortés 2025](https://pubmed.ncbi.nlm.nih.gov/41071338) <sub>(case report)</sub>

> “The cetuximab dose was reduced in 9 patients (27%) due to rash, and irinotecan dose was reduced in 11 patients (33%) due to diarrhea or hematologic toxicity or vomiting.” — [Xu 2024](https://pubmed.ncbi.nlm.nih.gov/39179622) <sub>(case-control)</sub>

> “Infusion reactions, all related to ASP‐1929, were reported for five patients and consisted of non‐serious grade 1 or 2 events (rash, itching, back pain, dyspnea, hyperhidrosis, stomach cramps/ache, tightness of throat, fever, myalgia diarrhea, headache, chills, nausea, and vomiting).” — [Cognetti 2026](https://pubmed.ncbi.nlm.nih.gov/40852760) <sub>(case series)</sub>

</details>

<details><summary>Evidence: Skin rash (2)</summary>

> “A pre‐specified analysis of the interaction between FCGR2A and FCGR3A polymorphisms and skin rash also found no statistically significant interaction, P = 0.20 and P = 0.71, respectively.” — [Shepshelovich 2018](https://pubmed.ncbi.nlm.nih.gov/30318772) <sub>(case-control)</sub>

> “Because the main toxicity of cetuximab is skin rash and the high degree of toxicity has very often been correlated with a good response to the drug, some studies have attempted to evaluate these polymorphisms as markers of toxicity, but insignificant results have been obtained [31,70,78].” — [Scarabel 2022](https://pubmed.ncbi.nlm.nih.gov/36432658) <sub>(review)</sub>

</details>

<details><summary>Evidence: acne-like skin rash (1)</summary>

> “In Phase II trials of cetuximab treatment in patients with epidermal growth factor receptor (EGFR) positive refractory colorectal cancer, more than 86% of patients developed acne-like skin rash, including 18% developing grade 3 symptoms (26).” — [Bloch 2025](https://pubmed.ncbi.nlm.nih.gov/41246356) <sub>(review)</sub>

</details>

<details><summary>Evidence: acneiform rash (1)</summary>

> “Maximum observed cetuximab-related acneiform rash was grade 0 in 7 patients, grade 1 in 14 patients, grade 2 in 28 patients and grade 3 in 9 patients, accounting for a total of 63.8% toxicity grade 2-3.” — [Dahan 2011](https://pubmed.ncbi.nlm.nih.gov/22117530) <sub>(case series)</sub>

</details>

<details><summary>Evidence: Edema (1)</summary>

> “In the iTAP and PDT groups, edema at the irradiation site was noted from the day following light exposure but resolved within several days.” — [Hamakubo 2026](https://pubmed.ncbi.nlm.nih.gov/41898220) <sub>(animal)</sub>

</details>

<details><summary>Evidence: folliculitis (1)</summary>

> “Toxicities (radiation dermatitis, mucositis, and folliculitis) were graded for severity from grades 1 to 5, according to the CTCAE v4.02 scale (http://ctep.cancer.gov/protocolDevelopment/ electronic_applications/ctc.htm). To analyze the association of folliculitis toxicity with survival, low toxicities were defined as grades 0 to 1 and severe as grades 2 to 3.” — [Pointreau 2016](https://pubmed.ncbi.nlm.nih.gov/27631463) <sub>(case series)</sub>

</details>

<details><summary>Evidence: hyperhidrosis (1)</summary>

> “Infusion reactions, all related to ASP‐1929, were reported for five patients and consisted of non‐serious grade 1 or 2 events (rash, itching, back pain, dyspnea, hyperhidrosis, stomach cramps/ache, tightness of throat, fever, myalgia diarrhea, headache, chills, nausea, and vomiting).” — [Cognetti 2026](https://pubmed.ncbi.nlm.nih.gov/40852760) <sub>(case series)</sub>

</details>

<details><summary>Evidence: itching (1)</summary>

> “Infusion reactions, all related to ASP‐1929, were reported for five patients and consisted of non‐serious grade 1 or 2 events (rash, itching, back pain, dyspnea, hyperhidrosis, stomach cramps/ache, tightness of throat, fever, myalgia diarrhea, headache, chills, nausea, and vomiting).” — [Cognetti 2026](https://pubmed.ncbi.nlm.nih.gov/40852760) <sub>(case report)</sub>

</details>

<details><summary>Evidence: pruritus (1)</summary>

> “By inhibiting EGFR functions, additional side effects arise as changes in the scalp and hair growth, xerosis and pruritus, as well as nail and eye disorders (27–29).” — [Bloch 2025](https://pubmed.ncbi.nlm.nih.gov/41246356) <sub>(review)</sub>

</details>

<details><summary>Evidence: radiation dermatitis (1)</summary>

> “Patients with LAHNSCC who developed severe radiation dermatitis toxicity (grade more than 3) had a longer OS than that of the other patients (P = 0.005, Fig. 3). No association was observed for mucositis (P = 0.221) or folliculitis (P =0 . 2 2 7 ) .” — [Pointreau 2016](https://pubmed.ncbi.nlm.nih.gov/27631463) <sub>(case series)</sub>

</details>

<details><summary>Evidence: scalp and hair growth changes (1)</summary>

> “By inhibiting EGFR functions, additional side effects arise as changes in the scalp and hair growth, xerosis and pruritus, as well as nail and eye disorders (27–29).” — [Bloch 2025](https://pubmed.ncbi.nlm.nih.gov/41246356) <sub>(case series)</sub>

</details>

<details><summary>Evidence: Ulceration (1)</summary>

> “In the iTAP group, ulcer formation was observed in one out of five mice beginning on day 6 after irradiation, followed by eschar formation within a few days, which subsequently progressed to complete healing.” — [Hamakubo 2026](https://pubmed.ncbi.nlm.nih.gov/41898220) <sub>(case report)</sub>

</details>

<details><summary>Evidence: xerosis (1)</summary>

> “In healthy tissue, EFGR is commonly expressed in the basal layer of the epidermis and regulates growth, differentiation, and wound healing. By inhibiting EGFR functions, additional side effects arise as changes in the scalp and hair growth, xerosis and pruritus, as well as nail and eye disorders (27–29).” — [Bloch 2025](https://pubmed.ncbi.nlm.nih.gov/41246356) <sub>(review)</sub>

</details>

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=cetuximab).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | blood | `DPYD` safety_allele | PGx paper |
| metabolism | liver | `DPYD` safety_allele, `UGT1A1` safety_allele | PGx paper |
| metabolism | small intestine | `UGT1A1` safety_allele | PGx paper |

<sub>Actors without a tissue in the table: C1QA (binder), C1QB (binder), C1QC (binder), EGFR (binder), FCGR1A (binder), FCGR2A (binder), FCGR2A (target), FCGR3A (binder), FCGR3A (target), FCGR3B (binder), IGF1 (unknown), IL8 (unknown).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 558 matched, 162 returned
- **screened:** 31  ·  **relevant:** 8
- **records:** 15  ·  extracted 2  ·  needs_review 7  ·  rejected 6  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_9 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Azzopardi_2011.pdf` | Azzopardi N et al., Cetuximab pharmacokinetics influences p…, Clinical cancer research :… (2011) | popPK | 10 | [10.1158/1078-0432.CCR-11-1081](https://doi.org/10.1158/1078-0432.CCR-11-1081) | [21953502](https://pubmed.ncbi.nlm.nih.gov/21953502) | The abstract explicitly reports quantitative population PK parameters (V1, V2, CL, Q, k0) for cetuximab in humans. |
| `Dirks_2008.pdf` | Dirks NL et al., Population pharmacokinetics of cetuxima…, Journal of clinical pharmac… (2008) | popPK | 10 | [10.1177/0091270007313393](https://doi.org/10.1177/0091270007313393) | [18218786](https://pubmed.ncbi.nlm.nih.gov/18218786) | The paper provides explicit population pharmacokinetic parameter estimates (Vmax, Km, V1, V2, Q) for cetuximab in humans. |
| `Le_2019.pdf` | Le Louedec F et al., Cetuximab pharmacokinetic/pharmacodynam…, British journal of clinical… (2019) | popPK | 10 | [10.1111/bcp.13907](https://doi.org/10.1111/bcp.13907) | [30811063](https://pubmed.ncbi.nlm.nih.gov/30811063) | Study reports a population PK model for cetuximab in humans with specific quantitative covariate effects (33.3% increase in CL and Vc) but lacks absolute mean parameter values (e.g., typical CL in L/h). |
| `Lobet_2023.pdf` | Lobet S et al., Relationship Between Cetuximab Target-M…, Clinical pharmacokinetics (2023) | popPK | 10 | [10.1007/s40262-023-01270-2](https://doi.org/10.1007/s40262-023-01270-2) | [37442917](https://pubmed.ncbi.nlm.nih.gov/37442917) | The paper reports quantitative TMDD model parameters (CL0, CL1, R0, kint) for cetuximab in human patients, and the numeric values are explicitly provided in the evidence text. |
| `Wang_2011.pdf` | Wang C et al., Phase 1 study of anti-epidermal growth…, mAbs (2011) | popPK | 10 | [10.4161/mabs.3.1.14021](https://doi.org/10.4161/mabs.3.1.14021) | [21051930](https://pubmed.ncbi.nlm.nih.gov/21051930) | The study reports quantitative PK parameters (half-life, compartmental model) for CMAB009, which is explicitly stated to have the same amino acid sequence as cetuximab, effectively serving as a cetuximab bioequivalent/biosimilar. |
| `Wang_2024.pdf` | Wang J et al., Integrated PK/PD Modeling Relates Smoot…, Journal of pharmaceutical s… (2024) | popPK | 9 | [10.1016/j.xphs.2023.10.019](https://doi.org/10.1016/j.xphs.2023.10.019) | [37844759](https://pubmed.ncbi.nlm.nih.gov/37844759) | The paper describes a population/physiologically-based PK model for cetuximab in xenografts, but the specific numeric parameter values are not explicitly listed in the provided abstract text. |
| `Deschamps_2026.pdf` | Marin C et al., The CetuxIMAX study: a population pharm…, Cancer chemotherapy and pha… (2026) | popPK | 8 | [10.1007/s00280-026-04892-y](https://doi.org/10.1007/s00280-026-04892-y) | [42053579](https://pubmed.ncbi.nlm.nih.gov/42053579) | The paper describes a population PK model for cetuximab but the extracted evidence contains no numeric parameter values (CL, V, etc.), only qualitative descriptions of the model structure and a concentration threshold. |
| `Delbaldo_2005.pdf` | Delbaldo C et al., Pharmacokinetic profile of cetuximab (E…, European journal of cancer… (2005) | popPK | 7 | [10.1016/j.ejca.2005.04.029](https://doi.org/10.1016/j.ejca.2005.04.029) | [16051481](https://pubmed.ncbi.nlm.nih.gov/16051481) | The study reports specific pharmacokinetic parameters (AUC and half-life) for cetuximab in patients, though it is a small trial (n=14) and lacks detailed clearance (CL) or volume (V) values typical of full population PK analyses. |
| `Park_2017.pdf` | Park WS et al., Use of a Target-Mediated Drug Dispositi…, Basic & clinical pharmacolo… (2017) | popPK | 5 | [10.1111/bcpt.12675](https://doi.org/10.1111/bcpt.12675) | [27637171](https://pubmed.ncbi.nlm.nih.gov/27637171) | The paper uses cetuximab as a comparator in a TMDD study, reporting only the general allometric scaling exponents (0.75 for CL, 1.0 for Vd) and a clearance range for GC1118, but does not provide specific numeric PK parameters (CL, V, Q, ka) derived from a model of cetuximab itself. |

<sub>queue written 2026-10-14T18:46:59.005814+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Aiello_2011 | not_relevant | 2 | 0 | The paper is a review discussing general clinical outcomes (survival, efficacy) associated with genetic variants, but it does not report specific changes in pharmacokinetic (PK) or pharmacodynamic (PD) parameters for cetuximab, nor does it provide extractable quantitative data. |
| PGx | Alfaro_2022 | not_relevant | 1 | 0 | The paper discusses general pharmacogenetics in colon cancer (RAS/RAF for efficacy, DPDY for toxicity) but does not report specific data linking genetic variants to the pharmacokinetics or pharmacodynamics of cetuximab. |
| PGx | Assenat_2006 | not_relevant | 0 | 0 | The text is a general review of irinotecan's use and mentions cetuximab only in the context of clinical efficacy in the third line, providing no data on pharmacogenomic effects on PK/PD parameters. |
| PGx | Astier_2010 | not_relevant | 4 | 1 | Discusses KRAS mutation as a predictive biomarker for cetuximab efficacy (PD) but provides no specific quantitative data on PK/PD parameters or effect sizes. |
| popPK | Augustin_2026 | irrelevant | 0 | 0 | The study focuses on MAGE-A4-TCB, using cetuximab only as a comparator for cytokine release, and reports no pharmacokinetic parameters for cetuximab. |
| popPK | Baaz_2022 | irrelevant | 2 | 1 | The paper is a translational PK-PD modeling study where cetuximab is one of several comparator drugs, and it reports only average exposure metrics (CAvg) rather than specific population pharmacokinetic parameters like clearance or volume. |
| PGx | Bardin_2014 | not_relevant | 0 | 0 | The text is a general review discussing the potential for therapeutic drug monitoring and mentions that cetuximab has shown encouraging results in prior studies, but it does not report any specific pharmacogenomic effects or PK/PD data from the study itself. |
| PGx | Berger_2017 | not_relevant | 0 | 0 | The paper analyzes pharmacogenomics for bevacizumab-induced hypertension, while cetuximab patients served only as a negative control cohort without reported genetic effect sizes. |
| popPK | Bisaso_2023 | irrelevant | 1 | 0 | The study focuses on pharmacodynamic drug-drug interactions (tumor growth/cell survival) rather than pharmacokinetic disposition parameters. |
| popPK | Bloch_2025 | irrelevant | 0 | 0 | The study focuses on the in vitro engineering and functional validation (binding/ADCC) of masked antibody constructs, not on pharmacokinetic disposition parameters. |
| PGx | Boisdron-Celle_2017 | not_relevant | 2 | 5 | The study reports pharmacogenomic effects on the PK/PD of irinotecan and 5-FU, but cetuximab dosing remained unchanged and no gene-to-cetuximab PK/PD relationship was reported. |
| PGx | Bruera_2020 | not_relevant | 0 | 0 | The paper investigates pharmacogenomic markers for 5-FU and irinotecan, not cetuximab. |
| PGx | Bzymek_2016 | not_relevant | 0 | 0 | The paper investigates the binding affinity of chemically modified epitope peptides (meditopes) to cetuximab, not the effect of human genetic variants on cetuximab pharmacokinetics or pharmacodynamics. |
| popPK | Carmona_2014 | irrelevant | 0 | 0 | The study focuses on bone marrow fat composition changes during chemotherapy, with no pharmacokinetic parameters reported for cetuximab. |
| popPK | Castro-Suárez_2020 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of nimotuzumab, not cetuximab (which is only mentioned as a comparator for adverse effects). |
| popPK | Centanni_2026 | irrelevant | 0 | 0 | The paper reports pharmacodynamic models for circulating tumor cells and extracellular vesicles, not the pharmacokinetics of cetuximab. |
| popPK | Cognetti_2026 | irrelevant | 0 | 0 | The study evaluates the pharmacokinetics of ASP-1929 (a cetuximab derivative/conjugate), not cetuximab itself, and does not report quantitative disposition parameters for cetuximab. |
| popPK | Cortés_2025 | irrelevant | 0 | 0 | The study evaluates the pharmacokinetics of BI-1607 (an anti-FcγRIIB antibody) and does not report PK parameters for cetuximab, which is only mentioned in the introduction as an example of an anti-EGFR antibody. |
| popPK | Cuffaro_2025 | irrelevant | 0 | 0 | The study focuses on the synthesis and in vitro antitumor efficacy of cetuximab-based antibody-drug conjugates, not the pharmacokinetic disposition of native cetuximab. |
| popPK | Cézé_2009 | irrelevant | 2 | 0 | The study validates an ELISA assay for cetuximab concentrations but does not report specific numerical PK parameter values (CL, V, etc.) for the population model in the provided evidence. |
| PGx | Dahan_2011 | not_relevant | 4 | 8 | The paper reports associations between gene variants and clinical outcomes (overall survival, TTP, response, toxicity) rather than changes in pharmacokinetic (PK) or direct pharmacodynamic (PD) parameters of cetuximab itself. |
| PGx | Dbeis_2016 | not_relevant | 2 | 0 | The text discusses SNPs in XRCC1 affecting response to 5-Fluorouracil, while only mentioning cetuximab in passing without reporting any pharmacogenomic effect on its PK or PD. |
| PGx | De_2015 | not_relevant | 2 | 1 | The provided text is a general introduction to a review article on colorectal cancer pharmacogenomics. It discusses the context of the disease and the general goal of the review but does not report specific data, results, or effects of gene variants on cetuximab PK/PD parameters. |
| popPK | Deschamps_2026 | irrelevant | 8 | 0 | The paper describes a population PK model for cetuximab but the extracted evidence contains no numeric parameter values (CL, V, etc.), only qualitative descriptions of the model structure and a concentration threshold. |
| PGx | Duffy_2015 | not_relevant | 3 | 2 | The text is a general overview that mentions biomarkers for predicting response/toxicity but does not report specific data on how a gene variant changes a PK or PD parameter of cetuximab. |
| PGx | Etienne-Grimaldi_2012 | not_relevant | 3 | 2 | Reports associations between genotypes and clinical outcomes (toxicity, survival, response) rather than changes in PK (e.g., AUC) or specific PD parameters (e.g., receptor occupancy) of cetuximab. |
| popPK | Filippini_2025 | irrelevant | 0 | 0 | This is a retrospective cohort study analyzing clinical outcomes (efficacy/safety) of phase I trials, and cetuximab is only mentioned as a standard of care comparator in the discussion, with no PK data provided. |
| popPK | Gao_2021 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of ramucirumab, not cetuximab. |
| PGx | Garattini_2015 | not_relevant | 0 | 0 | The paper is a review discussing the theoretical and economic implications of personalized medicine for cetuximab, but it does not report any specific pharmacogenomic study or data on how gene variants affect cetuximab's PK or PD parameters. |
| popPK | García-Illarramendi_2025 | irrelevant | 0 | 0 | The paper focuses on in silico clinical trials and systems biology modeling for regorafenib response in colorectal cancer; cetuximab is mentioned only as a comparator drug for model calibration, with no pharmacokinetic parameters reported. |
| PGx | Gervasini_2010 | not_relevant | 0 | 0 | The paper is a review discussing the complementary nature of pharmacogenetic testing and therapeutic drug monitoring, without reporting specific gene variant effects on cetuximab PK/PD parameters. |
| popPK | Hamakubo_2026 | irrelevant | 0 | 0 | The study is a pharmacodynamic/therapeutic efficacy trial in mice using a cetuximab-based immunotoxin, and it does not report any quantitative pharmacokinetic parameters (e.g., clearance, volume, half-life) for cetuximab. |
| PGx | Hasheminasab_2015 | not_relevant | 1 | 0 | The study reports associations with clinical outcomes (skin toxicity, survival) and IL8 levels, but does not report a pharmacokinetic or pharmacodynamic parameter of cetuximab itself. |
| PGx | Hu-Lieskovan_2011 | not_relevant | 1 | 10 | The paper reports a pharmacogenomic association with a clinical outcome (pathologic response), not a pharmacokinetic or pharmacodynamic parameter. |
| popPK | Hurwitz_2012 | irrelevant | 1 | 0 | Cetuximab is used only as a comparator agent in this study of a dual-targeting antibody in mice, and no specific quantitative PK parameters (CL, V, Q) are reported for cetuximab, only qualitative comparisons of half-life and volume. |
| PGx | Jing_2020 | not_relevant | 0 | 0 | The paper identifies tumor genetic variants associated with clinical resistance to cetuximab but does not report changes in pharmacokinetic or specific pharmacodynamic parameters linked to the variants. |
| popPK | Kakavoulia_2026 | irrelevant | 0 | 0 | This is an in-vitro study characterizing extracellular vesicle-antibody binding interactions using FIDA and does not report any pharmacokinetic parameters for cetuximab. |
| PGx | Klein_2017 | not_relevant | 0 | 0 | The paper does not report pharmacogenomic effects on cetuximab PK/PD; cetuximab is only used as a control antibody in combination efficacy studies. |
| PGx | Kohrt_2014 | not_relevant | 5 | 0 | The paper reports an association between FCGR3A polymorphism and CD137 expression on NK cells, but does not provide fitted effect sizes or quantitative changes in PK/PD parameters attributable to the variant. |
| popPK | Kołodziejczyk_2026 | irrelevant | 0 | 0 | The paper is a review on PAMAM and PLL dendrimers for boron neutron capture therapy and does not report pharmacokinetic parameters for cetuximab. |
| popPK | Ku_2012 | irrelevant | 0 | 0 | The paper is a meta-analysis of clinical efficacy (response rate, survival) and contains no pharmacokinetic parameters for cetuximab. |
| PGx | Kubo_2016 | not_relevant | 0 | 0 | The text is a review discussing skin toxicity and KRAS status as biomarkers for efficacy, but it does not report pharmacogenomic effects on cetuximab pharmacokinetic or pharmacodynamic parameters. |
| PGx | Lee_2014 | not_relevant | 5 | 10 | The study focuses on DPYD variants and 5-fluorouracil toxicity, not cetuximab pharmacokinetics or pharmacodynamics. |
| popPK | Leeman-Neill_2010 | irrelevant | 0 | 0 | The study focuses on the mechanistic and therapeutic effects of honokiol in HNSCC, using cetuximab only as a comparator agent in xenograft models, and reports no pharmacokinetic parameters. |
| PGx | Lenz_2006 | not_relevant | 0 | 0 | The abstract is a general review of pharmacogenomics in colorectal cancer focusing on chemotherapies (5-FU, platinum, irinotecan) and does not discuss cetuximab. |
| PGx | Leon_2011 | not_relevant | 0 | 0 | The paper focuses on DNA copy number profiles and outcomes for fluoropyrimidine-based regimens, not cetuximab pharmacokinetics or pharmacodynamics. |
| popPK | Li_2026 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of EGFR binding affinity (EC50) and resistance mutations, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | Li_2026_2 | irrelevant | 0 | 0 | The paper is a review on natural polysaccharide hydrogels for colorectal cancer and does not provide quantitative pharmacokinetic parameters for cetuximab. |
| popPK | Lin_2011 | irrelevant | 0 | 0 | The paper is an in vitro pharmacodynamic study of tetrac and nano-tetrac, where cetuximab is used only as a co-administered comparator agent for combination efficacy testing, with no pharmacokinetic parameters reported. |
| popPK | Lipinski_2023 | irrelevant | 0 | 0 | The paper focuses on the engineering of NK cell engager bispecific antibodies and reports functional activity (killing potency), not the pharmacokinetic disposition parameters of cetuximab itself. |
| popPK | Liu_2026 | irrelevant | 0 | 0 | The paper is a review of oxazolidinone antibiotics (linezolid, contezolid, tedizolid) and mentions cetuximab only as a distant example of a drug for which MIPD is used, providing no PK data for cetuximab. |
| PGx | Lobet_2023 | not_relevant | 0 | 0 | The paper investigates target-mediated pharmacokinetics and disease progression (PFS) but does not report any association with genetic variants, genotypes, or phenotypes. |
| popPK | Macaire_2020 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of G-CSF and the pharmacodynamics of cytotoxic chemotherapy (FOLFIRINOX), and does not investigate cetuximab or report any parameters for it. |
| popPK | Mahomed_2025 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of HIV broadly neutralizing antibodies (CAP256V2LS and VRC07-523LS), and cetuximab is only mentioned in passing regarding hyaluronidase effects in rats, with no PK data provided for cetuximab. |
| PGx | Mamot_2005 | not_relevant | 0 | 0 | The paper investigates the pharmacokinetics of cetuximab-conjugated liposomes in animal models, not the effect of human gene variants on cetuximab PK/PD parameters. |
| PGx | Marin_2020 | not_relevant | 0 | 0 | The paper is a review of general cellular mechanisms of chemoresistance in colorectal cancer and does not report specific pharmacogenomic effects of gene variants on cetuximab pharmacokinetics or pharmacodynamics. |
| popPK | Marin_2026 | irrelevant | 5 | 0 | The document is a correction notice that lists authors and affiliations but does not contain the original pharmacokinetic data, model parameters, or numeric values for cetuximab. |
| popPK | Meneses-Lorente_2017 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of lumretuzumab, with cetuximab only mentioned as a co-administered drug in combination regimens. |
| popPK | Milenković-Grišić_2024 | relevant | 4 | 0 | The paper uses a population PK model for cetuximab but refers to a "previously established" model, meaning no new numeric PK parameter values (CL, V, etc.) are reported in the text. |
| PGx | Mini_2009 | not_relevant | 2 | 1 | The text mentions KRAS mutation status as a predictive biomarker for cetuximab efficacy in the context of a general review of pharmacogenomics, but does not report any specific data, PK/PD parameter changes, or quantitative effect sizes derived from the study. |
| popPK | Ogungbenro_2019 | relevant | 4 | 0 | The paper is a simulation study using a population PK model for cetuximab, but the evidence provided contains no numeric PK parameter values (CL, V, etc.), only cost percentages. |
| popPK | Ooki_2022 | irrelevant | 0 | 0 | The paper focuses on the impact of tumor shrinkage on quality of life and survival, reporting no pharmacokinetic parameters for cetuximab. |
| PGx | Pander_2007 | not_relevant | 2 | 1 | The text is a description of a review paper overviewing the field, not reporting specific quantitative pharmacogenomic findings. |
| PGx | Pander_2015 | not_relevant | 2 | 8 | The study reports genetic associations with clinical outcome (PFS) rather than a direct pharmacokinetic or pharmacodynamic parameter. |
| popPK | Panzeri_2020 | irrelevant | 0 | 0 | This is an in-vitro study investigating the efficacy of cowpea extracts on colorectal cancer cell lines using cetuximab as a co-agent to measure EC50 changes, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Park_2017 | relevant | 5 | 2 | The paper uses cetuximab as a comparator in a TMDD study, reporting only the general allometric scaling exponents (0.75 for CL, 1.0 for Vd) and a clearance range for GC1118, but does not provide specific numeric PK parameters (CL, V, Q, ka) derived from a model of cetuximab itself. |
| popPK | Patel_2010 | irrelevant | 0 | 0 | The paper is an in-vitro study evaluating antibody-dependent cellular cytotoxicity (ADCC) and binding affinity, not pharmacokinetic disposition parameters. |
| popPK | Pekar_2021 | irrelevant | 0 | 0 | The study focuses on the generation and in vitro functional characterization (binding, ADCC) of new cattle-derived antibodies targeting EGFR, using cetuximab only as a comparator, and reports no pharmacokinetic parameters. |
| popPK | Pekar_2021_2 | irrelevant | 0 | 0 | The paper describes in vitro immunological mechanisms of bispecific immunoligands using cetuximab as a component, without reporting any pharmacokinetic parameters. |
| popPK | Peña-Cabia_2021 | irrelevant | 2 | 0 | The study reports steady-state trough concentrations and exposure-response analysis but does not provide population pharmacokinetic model parameters (CL, V, Q, etc.). |
| popPK | Piscitelli_2024 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of encorafenib, rosuvastatin, and bupropion; cetuximab is only mentioned as a co-administered drug in the context of a background phase 3 study where coproporphyrin I was measured, with no PK parameters reported for cetuximab itself. |
| popPK | Rapic_2017 | irrelevant | 0 | 0 | The study investigates irinotecan in a mouse model and does not report pharmacokinetic parameters for cetuximab. |
| PGx | Rocha-Lima_2007 | not_relevant | 0 | 0 | The text is a review of EGFR-targeted therapies and general strategies for patient selection, but it does not report specific pharmacogenomic effects on the PK or PD parameters of cetuximab. |
| PGx | Ross_2004 | not_relevant | 0 | 0 | The paper is a review of the history of targeted therapies and does not report specific pharmacogenomic effects on cetuximab PK/PD parameters. |
| popPK | Saba_2014 | irrelevant | 1 | 0 | The study reports pharmacokinetic parameters for everolimus, while cetuximab is only a co-administered standard therapy with no specific disposition values (CL, V, etc.) reported. |
| PGx | Saijo_2013 | not_relevant | 2 | 0 | The paper discusses ethnic differences in cetuximab efficacy (PD outcome) but does not report specific pharmacogenomic gene variants or genotypes affecting PK/PD parameters. |
| PGx | Saito_2009 | not_relevant | 3 | 1 | The text is a general review abstract that mentions cetuximab and KRAS only as examples of broader pharmacogenomic research, without reporting specific quantitative PK or PD parameter changes in this document. |
| popPK | Samuels_2016 | irrelevant | 0 | 0 | This is a clinical trial comparing dysphagia and quality of life outcomes, with no pharmacokinetic data for cetuximab. |
| PGx | Scarabel_2022 | not_relevant | 5 | 4 | The paper discusses genetic variants affecting cetuximab efficacy (e.g., OS, PFS), which are clinical outcomes rather than specific pharmacokinetic (PK) or pharmacodynamic (PD) parameters like AUC, Cmax, or receptor occupancy. |
| popPK | Schmitz_2015 | irrelevant | 0 | 0 | The paper uses DCE-CT to assess tumor vascularization and reports contrast agent kinetic parameters (Fp, ve, vp, PS), not the population pharmacokinetic parameters (CL, V, t1/2) of the drug cetuximab itself. |
| popPK | Sen_2012 | irrelevant | 0 | 0 | The study focuses on the mechanism of EGFR inhibitor resistance via STAT3 inhibition using cell lines and animal tumor models, and does not report quantitative pharmacokinetic parameters for cetuximab. |
| popPK | Seurat_2020 | irrelevant | 2 | 2 | The paper is a clinical trial design simulation study using cetuximab as a reference therapy; it cites previous studies for PK parameters but does not report original quantitative PK data (Table 1 values are not included in the evidence). |
| popPK | Sheng_2026 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics and dosing of sugemalimab, not cetuximab (cetuximab is only mentioned in passing as a comparison for ethnic sensitivity). |
| PGx | Shepshelovich_2018 | not_relevant | 0 | 0 | The study reports the association between gene variants and overall survival (a clinical outcome), not a change in a pharmacokinetic or pharmacodynamic parameter (e.g., AUC, clearance, receptor occupancy). |
| popPK | Sibieude_2021 | irrelevant | 0 | 0 | The paper is a methodological simulation study using generic PK parameters (V=10, CL=1, ka=1) and references an external dataset for cetuximab without reporting its specific quantitative disposition parameters. |
| PGx | Silvestris_2014 | not_relevant | 2 | 5 | The paper focuses on clinical efficacy and cost-effectiveness rather than quantitative pharmacokinetic or pharmacodynamic modeling of gene-variant effects. |
| PGx | Sorich_2015 | not_relevant | 5 | 5 | The paper reports a pharmacodynamic/clinical outcome (survival) based on RAS mutation status, which is a predictive biomarker, but it does not report changes in pharmacokinetic parameters (PK) or molecular pharmacodynamic parameters (e.g., receptor occupancy, signaling pathway inhibition) directly. |
| PGx | Stoehlmacher_2007 | not_relevant | 5 | 2 | The text is an abstract of a general review; while it mentions cetuximab pharmacogenetics, it does not report specific data, effects, or parameters in this text. |
| PGx | Stöhlmacher_2005 | not_relevant | 2 | 2 | This is a review article that broadly discusses pharmacogenetics in GI cancers; while it mentions cetuximab, it does not report specific, extracted quantitative pharmacogenomic effects on PK/PD parameters within the text provided. |
| popPK | Tabernero_2010 | irrelevant | 1 | 0 | The study mentions PK evaluation but the provided abstract reports only safety and clinical response data without specific quantitative PK parameters. |
| PGx | Ternant_2016 | not_relevant | 0 | 0 | The paper investigates the pharmacokinetics of infliximab, and cetuximab is only mentioned as a comparison for FcRn binding affinity without reporting any pharmacogenomic data or PK parameters for cetuximab. |
| popPK | Ternant_2025 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of rituximab, not cetuximab. |
| PGx | Tokunaga_2019 | not_relevant | 0 | 0 | The paper evaluates genetic variants (SNPs) and clinical outcomes for patients treated with bevacizumab, not cetuximab. |
| PGx | Tokunaga_2019_2 | not_relevant | 0 | 0 | The paper reports associations between AMPK pathway SNPs and clinical outcomes (PFS/OS) rather than direct pharmacokinetic or pharmacodynamic parameters of cetuximab. |
| PGx | Van_2015 | not_relevant | 2 | 8 | The paper reports on clinical efficacy endpoints (overall survival, progression-free survival) and tumor response, not on pharmacokinetic (PK) or pharmacodynamic (PD) parameters of cetuximab (such as plasma concentrations or target engagement levels) modified by genetic variants. |
| popPK | Wang_2024 | relevant | 9 | 2 | The paper describes a population/physiologically-based PK model for cetuximab in xenografts, but the specific numeric parameter values are not explicitly listed in the provided abstract text. |
| PGx | Watanabe_2015 | not_relevant | 0 | 0 | The text is a review of companion diagnostics in general and mentions KRAS testing for cetuximab but does not report any specific pharmacogenomic effects on PK or PD parameters. |
| PGx | Wen_2015 | not_relevant | 0 | 0 | The text is a general review of pharmacogenomics in drug development and mentions cetuximab only as an example of a targeted therapy, without reporting any specific gene variant's effect on its PK or PD. |
| PGx | Widmer_2014 | not_relevant | 2 | 0 | The paper is a review discussing therapeutic drug monitoring for anticancer agents generally; it mentions cetuximab only to note that TDM data exists but does not report any specific pharmacogenomic effects on its PK or PD parameters. |
| popPK | Wishart_2026 | irrelevant | 0 | 0 | The study reports audiometric hearing outcomes, not pharmacokinetic parameters (clearance, volume, etc.), for cetuximab. |
| popPK | Wu_2006 | irrelevant | 1 | 0 | The study focuses on the biodistribution and efficacy of a methotrexate-cetuximab dendrimer conjugate in rats, rather than the pharmacokinetics of cetuximab itself. |
| popPK | Wu_2022 | irrelevant | 0 | 0 | The study focuses on a novel anti-Siglec-15 antibody (3F1) and its antitumor activity, with cetuximab (Erbitux) used only as a co-administered comparator in a pharmacodynamic mouse model, and no PK parameters are reported. |
| popPK | Xiang_2020 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for bemarituzumab, not cetuximab. |
| PGx | Xu_2022 | not_relevant | 0 | 0 | The paper describes an analytical method for characterizing charge variants of cetuximab but does not investigate the impact of human genetic variants on pharmacokinetic or pharmacodynamic parameters. |
| popPK | Xu_2023 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of sabatolimab, not cetuximab. |
| popPK | Xu_2024 | irrelevant | 0 | 0 | This is a clinical efficacy and biomarker study (Phase 2) reporting tumor response and survival outcomes, not a pharmacokinetic study with disposition parameters for cetuximab. |
| popPK | Yang_2026 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for encorafenib, not cetuximab (which is only mentioned as a co-administered agent). |
| PGx | Zhang_2020 | not_relevant | 2 | 1 | The study investigates the genomic mechanisms of acquired resistance to cetuximab in a specific KRAS G13D PDX model, rather than reporting how a germline or specific gene variant alters the PK or PD parameters of the drug in a clinical or comparative pharmacogenomic context. |
| popPK | Zhang_2026 | irrelevant | 0 | 0 | The paper studies pharmacokinetic prediction models for EGFR-targeting PROTACs in mice, not the pharmacokinetics of the drug cetuximab. |
| popPK | van_2026 | irrelevant | 0 | 0 | The study is an analytical chemistry paper characterizing charge and glycosylation variants using LC-MS, not a pharmacokinetic study reporting disposition parameters like CL or V. |
| popPK | van_2026_2 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for procizumab (PCZ), not cetuximab. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-14 18:47 UTC</sub>
