<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B01A&quot;,&quot;href&quot;:&quot;atc/B01A.md&quot;},{&quot;label&quot;:&quot;edoxaban&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Edoxaban_Zou2025_reference&quot;,&quot;label&quot;:&quot;Zou_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_edoxaban/Edoxaban_Zou2025_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Edoxaban_Edwina2025_reference&quot;,&quot;label&quot;:&quot;Edwina_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_edoxaban/Edoxaban_Edwina2025_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

# edoxaban

- **generic name:** edoxaban
- **ATC codes:** `B01AF03`
- **DrugBank:** [DB09075](https://go.drugbank.com/drugs/DB09075) · **PubChem:** [CID 10280735](https://pubchem.ncbi.nlm.nih.gov/compound/10280735)
- **molar mass:** 548.06 g/mol (C24H30ClN7O4S) — DrugBank
- **groups:** approved, investigational

## About

Edoxaban is a direct factor Xa inhibitor used to prevent stroke in atrial fibrillation and to treat venous thromboembolism such as pulmonary embolism. It is an approved medicine, authorised in the European Union, and is widely used as an anticoagulant.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q21011234](https://www.wikidata.org/wiki/Q21011234) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| edoxaban | parent | 548.06 | C24H30ClN7O4S | DrugBank | [10280735](https://pubchem.ncbi.nlm.nih.gov/compound/10280735) | Edwina_2025, Ueshima_2025, Yin_2014, Zou_2025 |
| M4 | metabolite | — (mass units only) | — | — | — | — |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-05 15:06 | 25:37 | 1/3/1 | 4/0/1 | 0/0/2 | 423,097/78,661 | ollama / qwen3.8:27b-mtp-q8_0 | 18 | 1/18 | 18/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--orange" title="a second model re-read this paper; the two readings agree on 0.0 of the compared fields. The first reading is what the record holds.">cross-check: partial</span><br><sub>caveat: the record defines covariate effects (weight on clearance, renal function …) but the engineer simulated only…</sub><br><sub>STALE — current validate: extracted</sub><br><sub>route_to: `engineer_replication`</sub> | [Zou_2025_reference](drugs/drug_edoxaban/Edoxaban_Zou2025_reference.md) | ▶ model + simulator | 2-compartment, oral | 6 (+2 cov.) | Zou P et al., Population pharmacokinetics and pharmac…, CPT: pharmacometrics & syst… (2025) | [10.1002/psp4.13248](https://doi.org/10.1002/psp4.13248) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.333). The first reading is what the record holds.">cross-check: disputed</span><br><sub>STALE — current validate: needs_review</sub><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>route_to: `human_review`</sub> | [Ueshima_2025_reference](drugs/drug_edoxaban/Edoxaban_Ueshima2025_reference.md) | — | 1-compartment (no model) | 1 | Ueshima S et al., Population pharmacokinetics and pharmac…, Journal of pharmaceutical h… (2025) | [10.1186/s40780-025-00453-2](https://doi.org/10.1186/s40780-025-00453-2) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.333). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: T3_output_variable</sub><br><sub>blocking: T3_topology_template</sub><br><sub>route_to: `engineer`</sub> | [Edwina_2025_reference](drugs/drug_edoxaban/Edoxaban_Edwina2025_reference.md) | ▶ model + simulator | 1-compartment, oral | 4 | Edwina AE et al., Population pharmacokinetics of edoxaban…, Journal of thrombosis and h… (2025) | [10.1016/j.jtha.2025.06.023](https://doi.org/10.1016/j.jtha.2025.06.023) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (primary re-run, agreement 0.4). The first reading is what the record holds.">cross-check: partial</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Terrier_2022_reference](drugs/drug_edoxaban/Edoxaban_Terrier2022_reference.md) | — | 1-compartment (no model) | 0 | Terrier J et al., Population Pharmacokinetic Models for D…, Clinical pharmacology and t… (2022) | [10.1002/cpt.2649](https://doi.org/10.1002/cpt.2649) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.375). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Yin_2014_reference](drugs/drug_edoxaban/Edoxaban_Yin2014_reference.md) | — | 1-compartment (no model) | 2 | Yin OQ et al., Population pharmacokinetics and dose-ex…, Clinical drug investigation (2014) | [10.1007/s40261-014-0229-7](https://doi.org/10.1007/s40261-014-0229-7) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.75). The first reading is what the record holds.">cross-check: disputed</span> | [Song_2014_iFXa](drugs/drug_edoxaban/pd_Song_2014_iFXa.md) | intrinsic factor X activity ← edoxaban · target-mediated drug disposition | — | Song S et al., Population pharmacokinetic-pharmacodyna…, Journal of clinical pharmac… (2014) | [10.1002/jcph.306](https://doi.org/10.1002/jcph.306) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.75). The first reading is what the record holds.">cross-check: disputed</span> | [Xu_2023_PT](drugs/drug_edoxaban/pd_Xu_2023_PT.md) | PT ← edoxaban · direct linear effect | — | Xu R et al., Physiologically-based pharmacokinetic p…, CPT: pharmacometrics & syst… (2023) | [10.1002/psp4.12977](https://doi.org/10.1002/psp4.12977) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.75). The first reading is what the record holds.">cross-check: disputed</span> | [Xu_2023_aPTT](drugs/drug_edoxaban/pd_Xu_2023_aPTT.md) | aPTT ← edoxaban · direct linear effect | — | Xu R et al., Physiologically-based pharmacokinetic p…, CPT: pharmacometrics & syst… (2023) | [10.1002/psp4.12977](https://doi.org/10.1002/psp4.12977) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.75). The first reading is what the record holds.">cross-check: disputed</span> | [Yin_2014_2_incidence_of_bleeds](drugs/drug_edoxaban/pd_Yin_2014_2_incidence_of_bleeds.md) | incidence of bleeds ← edoxaban · stimulation effect | — | Yin OQ et al., Edoxaban population pharmacokinetics an…, European journal of clinica… (2014) | [10.1007/s00228-014-1736-4](https://doi.org/10.1007/s00228-014-1736-4) |
| <span class="pk-badge pk-badge--green">accepted (caveats)</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.286). The first reading is what the record holds.">cross-check: disputed</span> | [Zou_2025_anti_FXa](drugs/drug_edoxaban/pd_Zou_2025_anti_FXa.md) | anti-Factor Xa ← edoxaban · direct Emax (saturable) effect | model (no simulator) | Zou P et al., Population pharmacokinetics and pharmac…, CPT: pharmacometrics & syst… (2025) | [10.1002/psp4.13248](https://doi.org/10.1002/psp4.13248) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.625). The first reading is what the record holds.">cross-check: disputed</span> | [Nyberg_2016_All_death](drugs/drug_edoxaban/pd_Nyberg_2016_All_death.md) | All death ← edoxaban · time-to-event model | — | Nyberg J et al., Edoxaban Exposure-Response Analysis and…, CPT: pharmacometrics & syst… (2016) | [10.1002/psp4.12077](https://doi.org/10.1002/psp4.12077) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:gpt-oss-120b (?, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span> | [Nyberg_2016_DVT_nonfatal_PE](drugs/drug_edoxaban/pd_Nyberg_2016_DVT_nonfatal_PE.md) | Recurrent DVT + nonfatal PE ← edoxaban · time-to-event model | — | Nyberg J et al., Edoxaban Exposure-Response Analysis and…, CPT: pharmacometrics & syst… (2016) | [10.1002/psp4.12077](https://doi.org/10.1002/psp4.12077) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:gpt-oss-120b (?, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span> | [Nyberg_2016_DVT_nonfatal_PE_all_cause_mortality](drugs/drug_edoxaban/pd_Nyberg_2016_DVT_nonfatal_PE_all_cause_mortality.md) | Recurrent DVT + nonfatal PE + all‐cause mortality ← edoxaban · time-to-event model | — | Nyberg J et al., Edoxaban Exposure-Response Analysis and…, CPT: pharmacometrics & syst… (2016) | [10.1002/psp4.12077](https://doi.org/10.1002/psp4.12077) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.5). The first reading is what the record holds.">cross-check: disputed</span> | [Nyberg_2016_VTE](drugs/drug_edoxaban/pd_Nyberg_2016_VTE.md) | Recurrent VTE ← edoxaban · time-to-event model | — | Nyberg J et al., Edoxaban Exposure-Response Analysis and…, CPT: pharmacometrics & syst… (2016) | [10.1002/psp4.12077](https://doi.org/10.1002/psp4.12077) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.6). The first reading is what the record holds.">cross-check: disputed</span> | [Zou_2025_PT](drugs/drug_edoxaban/pd_Zou_2025_PT.md) | prothrombin time ← edoxaban · direct linear effect | model (no simulator) | Zou P et al., Population pharmacokinetics and pharmac…, CPT: pharmacometrics & syst… (2025) | [10.1002/psp4.13248](https://doi.org/10.1002/psp4.13248) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.6). The first reading is what the record holds.">cross-check: disputed</span> | [Zou_2025_aPTT](drugs/drug_edoxaban/pd_Zou_2025_aPTT.md) | activated partial thromboplastin time ← edoxaban · direct linear effect | model (no simulator) | Zou P et al., Population pharmacokinetics and pharmac…, CPT: pharmacometrics & syst… (2025) | [10.1002/psp4.13248](https://doi.org/10.1002/psp4.13248) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span> | **ABCB1** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | transport | [Han_2023](drugs/drug_edoxaban/pgx_Han_2023_ABCB1_Q100.md) | Han JM et al., Association between SLCO1B1 genetic pol…, Scientific reports (2023) | [10.1038/s41598-023-43179-7](https://doi.org/10.1038/s41598-023-43179-7) |
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span> | **SLCO1B1** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | transport | [Han_2023](drugs/drug_edoxaban/pgx_Han_2023_SLCO1B1_Q100.md) | Han JM et al., Association between SLCO1B1 genetic pol…, Scientific reports (2023) | [10.1038/s41598-023-43179-7](https://doi.org/10.1038/s41598-023-43179-7) |

<details class="pk-legend"><summary>PGx evidence and model availability</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>Phenotype/genotype-specific effect on a named model parameter (θ).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>Gene–drug association without a quantitative parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>CPIC/DPWG-derived estimate, not a primary-paper estimate.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>Adverse-reaction risk allele; no quantitative PK/PD parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>Phenotype-specific browser simulation and downloadable PGx model available.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>PGx model available; browser simulation unavailable.</td></tr></tbody></table></details>

<details class="legend">
<summary>PGx field definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>gene</code></td><td>Associated gene; papers with multiple genes contribute multiple records.</td></tr><tr><td><code>affects</code></td><td>Target PK/PD parameter (Q-code and name); θ scales its baseline value. Q100 denotes a non-parameter association; safety denotes adverse-reaction risk. PA identifiers indicate ClinPGx/PharmGKB guideline-derived records.</td></tr><tr><td><code>mechanism</code></td><td>Metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>Source-paper identifier and full-record link.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=edoxaban).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` substrate/transport | DrugBank actor |
| absorption | kidney | `ABCB1` substrate/transport | DrugBank actor |
| absorption | liver | `ABCB1` substrate/transport | DrugBank actor |
| absorption | placenta | `ABCB1` substrate/transport | DrugBank actor |
| absorption | small intestine | `ABCB1` substrate/transport | DrugBank actor |
| absorption | testis | `ABCB1` substrate/transport | DrugBank actor |
| metabolism | blood | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | liver | `SLCO1B1` transport | paper PGx gene |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: F10 (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 127 matched, 60 returned
- **screened:** 6  ·  **relevant:** 5
- **records:** 5  ·  extracted 1  ·  needs_review 1  ·  rejected 3  ·  stale 3
- **scholar-agent fallback query used:** not captured

## Full-text requests

_15 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Edwina_2025.pdf` | Edwina AE et al., Population pharmacokinetics of edoxaban…, Journal of thrombosis and h… (2025) | popPK | 10 | [10.1016/j.jtha.2025.06.023](https://doi.org/10.1016/j.jtha.2025.06.023) | [40617502](https://pubmed.ncbi.nlm.nih.gov/40617502) | The abstract explicitly reports quantitative population PK parameters (ka, CL, V1, V2) for edoxaban in geriatric patients. |
| `Shimizu_2017.pdf` | Shimizu T et al., Population Pharmacokinetics of Edoxaban…, Clinical pharmacology in dr… (2017) | popPK | 10 | [10.1002/cpdd.329](https://doi.org/10.1002/cpdd.329) | [28032482](https://pubmed.ncbi.nlm.nih.gov/28032482) | The paper describes a population pharmacokinetic model for edoxaban, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence text. |
| `Song_2014.pdf` | Song S et al., Population pharmacokinetic-pharmacodyna…, Journal of clinical pharmac… (2014) | popPK | 10 | [10.1002/jcph.306](https://doi.org/10.1002/jcph.306) | [24706516](https://pubmed.ncbi.nlm.nih.gov/24706516) | The paper describes a population PK model for edoxaban, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence text. |
| `Yin_2014.pdf` | Yin OQ et al., Population pharmacokinetics and dose-ex…, Clinical drug investigation (2014) | popPK | 10 | [10.1007/s40261-014-0229-7](https://doi.org/10.1007/s40261-014-0229-7) | [25186833](https://pubmed.ncbi.nlm.nih.gov/25186833) | The paper reports a population PK model for edoxaban in humans with specific quantitative values for bioavailability, clearance covariate effects, and lag time, though central parameter estimates (like mean CL or V) are not explicitly listed in the provided text. |
| `Yin_2014_2.pdf` | Yin OQ et al., Edoxaban population pharmacokinetics an…, European journal of clinica… (2014) | popPK | 10 | [10.1007/s00228-014-1736-4](https://doi.org/10.1007/s00228-014-1736-4) | [25168620](https://pubmed.ncbi.nlm.nih.gov/25168620) | The paper is a population PK study of edoxaban in humans, but the specific numeric parameter values (CL, V, etc.) are not listed in the provided abstract text, only qualitative changes and bioavailability. |
| `Wang_2025.pdf` | Wang D et al., Relevance of selected pharmacogenetic p…, British journal of clinical… (2025) | pgx | 8 | [10.1002/bcp.70078](https://doi.org/10.1002/bcp.70078) | [40400080](https://www.ncbi.nlm.nih.gov/pubmed/40400080) | metadata signals extractable PGX data (ABCB1, PK/PD-context) |
| `Abrignani_2021.pdf` | Abrignani MG et al., Gastroprotection in patients on antipla…, European journal of interna… (2021) | pgx | 7 | [10.1016/j.ejim.2020.11.014](https://doi.org/10.1016/j.ejim.2020.11.014) | [33279389](https://www.ncbi.nlm.nih.gov/pubmed/33279389) | metadata signals extractable PGX data (CYP2C19, PK/PD-context) |
| `Grymonprez_2023.pdf` | Grymonprez M et al., Impact of P-glycoprotein and CYP3A4-int…, European heart journal. Car… (2023) | pgx | 7 | [10.1093/ehjcvp/pvad070](https://doi.org/10.1093/ehjcvp/pvad070) | [37791408](https://www.ncbi.nlm.nih.gov/pubmed/37791408) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Hanigan_2022.pdf` | Hanigan S et al., Evaluating pharmacokinetic drug-drug in…, Expert opinion on drug meta… (2022) | pgx | 7 | [10.1080/17425255.2022.2074397](https://doi.org/10.1080/17425255.2022.2074397) | [35543017](https://www.ncbi.nlm.nih.gov/pubmed/35543017) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Jin_2024.pdf` | Jin S et al., In vitro assessment of inhibitory effec…, European journal of pharmac… (2024) | pgx | 7 | [10.1016/j.ejps.2024.106884](https://doi.org/10.1016/j.ejps.2024.106884) | [39218046](https://www.ncbi.nlm.nih.gov/pubmed/39218046) | metadata signals extractable PGX data (CYP2C9, PK/PD-context) |
| `Kirchhof_2013.pdf` | Kirchhof P, The European Heart Rhythm Association P…, Arrhythmia & electrophysiol… (2013) | pgx | 7 | [10.15420/aer.2013.2.2.115](https://doi.org/10.15420/aer.2013.2.2.115) | [26835051](https://www.ncbi.nlm.nih.gov/pubmed/26835051) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Stöllberger_2021.pdf` | Stöllberger C et al., Update on drug interactions with non-vi…, Expert review of clinical p… (2021) | pgx | 7 | [10.1080/17512433.2021.1908124](https://doi.org/10.1080/17512433.2021.1908124) | [33757376](https://www.ncbi.nlm.nih.gov/pubmed/33757376) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Stöllberger_2023.pdf` | Stöllberger C et al., Drug-drug interactions with direct oral…, Expert review of clinical p… (2023) | pgx | 7 | [10.1080/17512433.2023.2187376](https://doi.org/10.1080/17512433.2023.2187376) | [36861431](https://www.ncbi.nlm.nih.gov/pubmed/36861431) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Verstraete_2026.pdf` | Verstraete A et al., Direct oral anticoagulant use and drug-…, Journal of thrombosis and h… (2026) | pgx | 7 | [10.1016/j.jtha.2026.06.038](https://doi.org/10.1016/j.jtha.2026.06.038) | [42413824](https://www.ncbi.nlm.nih.gov/pubmed/42413824) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Mega_2015.pdf` | Mega JL et al., Genetics and the clinical response to w…, Lancet (London, England) (2015) | pgx | 5 | [10.1016/S0140-6736(14)61994-2](https://doi.org/10.1016/S0140-6736(14)61994-2) | [25769357](https://www.ncbi.nlm.nih.gov/pubmed/25769357) | metadata signals extractable PGX data (CYP2C9) |

<sub>queue written 2026-10-05T14:42:45.949597+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Abrignani_2021 | not_relevant | 0 | 0 | The paper is a position statement on gastroprotection and drug interactions (PPIs) and does not report pharmacogenomic effects on edoxaban PK/PD. |
| popPK | Barco_2025 | irrelevant | 0 | 0 | The study analyzes hematologic effects (WBC counts) of warfarin vs. edoxaban and does not report any pharmacokinetic parameters for edoxaban. |
| PGx | Burn_2018 | not_relevant | 0 | 0 | The paper is a general comparison of DOACs and warfarin regarding adherence and monitoring, without reporting specific pharmacogenomic effects on edoxaban PK/PD parameters. |
| popPK | Diesveld_2024 | irrelevant | 2 | 0 | This is a systematic review and recommendation paper that summarizes findings from other studies but does not report original quantitative pharmacokinetic parameter values for edoxaban in the provided evidence. |
| PD | Diesveld_2024 | not_relevant | 2 | 1 | The paper is a systematic review providing qualitative safety recommendations and summary tables, but it does not report or derive specific numeric pharmacodynamic parameters (e.g., Emax, EC50) or concentration-effect curves for edoxaban. |
| PGx | Fawzy_2019 | not_relevant | 1 | 0 | The paper is a general review of pharmacokinetics and pharmacodynamics of oral anticoagulants and does not report specific pharmacogenomic effects on edoxaban parameters. |
| PGx | Grymonprez_2023 | not_relevant | 0 | 0 | The study investigates drug-drug interactions (P-gp/CYP3A4 inhibitors/inducers) and clinical outcomes, not the effect of a specific gene variant or genotype on pharmacokinetic or pharmacodynamic parameters. |
| PGx | Han_2023 | not_relevant | 5 | 10 | The study reports associations between SLCO1B1 polymorphisms and bleeding risk (a clinical outcome), but does not report direct changes in pharmacokinetic (e.g., AUC, Cmax) or pharmacodynamic (e.g., anti-Xa activity) parameters. |
| PGx | Hanigan_2022 | not_relevant | 0 | 0 | The paper is a review of drug-drug interactions and renal dysfunction, not pharmacogenomic effects of gene variants on edoxaban PK/PD. |
| PGx | Hirai_2022 | not_relevant | 2 | 5 | The study reports a drug-drug interaction (cyclosporine) and lists genotypes for one bleeding patient, but does not report a quantitative pharmacogenomic effect size or genotype-stratified PK/PD parameters. |
| PGx | Hirai_2026 | not_relevant | 0 | 0 | The paper is a narrative review on drug-drug interactions between anticoagulants and calcineurin inhibitors, mentioning pharmacogenomic profiles only as a general variability factor without reporting specific gene-variant effects on edoxaban PK/PD. |
| PGx | Jin_2024 | not_relevant | 0 | 0 | The study evaluates drug-drug interactions (DDI) between kinase inhibitors and anticoagulants, not pharmacogenomic effects of gene variants on edoxaban. |
| PGx | Kirchhof_2013 | not_relevant | 0 | 0 | The paper is a clinical practice guide summarizing general pharmacokinetic considerations (drug interactions, renal function) but does not report specific pharmacogenomic effects of gene variants on edoxaban PK/PD parameters. |
| PGx | Lippi_2014 | not_relevant | 0 | 0 | The paper discusses drug-drug interactions between antibiotics and DOACs, not pharmacogenomic effects of gene variants on edoxaban PK/PD. |
| popPK | Lu_2020 | irrelevant | 1 | 0 | The study focuses on the reversal of anticoagulation by andexanet alfa, reporting pharmacodynamic endpoints (anti-FXa activity, thrombin generation) rather than quantitative pharmacokinetic disposition parameters (CL, V, ka) for edoxaban. |
| PGx | Mar_2022 | not_relevant | 0 | 0 | The paper discusses drug-drug interactions (DDI) involving CYP3A4 and P-gp, not pharmacogenomic effects of genetic variants on edoxaban PK/PD. |
| PGx | McCarley_2023 | not_relevant | 0 | 0 | The paper reports the frequency of genetic variants in pharmacogenes but does not measure or report any changes in pharmacokinetic or pharmacodynamic parameters of edoxaban. |
| PGx | Mega_2015 | not_relevant | 2 | 5 | The paper reports pharmacogenomic effects on warfarin response (INR/bleeding) and differential bleeding risk with edoxaban, but does not report changes in edoxaban's own PK or PD parameters (e.g., anti-Xa activity) based on genotype. |
| PGx | Mendell_2015 | not_relevant | 0 | 0 | The study investigates a drug-drug interaction (rifampin) rather than a pharmacogenomic effect (gene variant/genotype). |
| popPK | Nyberg_2016 | irrelevant | 2 | 0 | The study is an exposure-response analysis using PK parameters from a separate population PK model, and it does not report original quantitative disposition parameters (CL, V, ka) for edoxaban. |
| popPK | Oh_2026 | irrelevant | 0 | 0 | This is a review article discussing pharmacokinetic interactions and toxicology without reporting original quantitative PK parameter values for edoxaban. |
| PD | Oh_2026 | not_relevant | 1 | 0 | The text is a review article discussing mechanistic interactions and qualitative risks without reporting specific numeric PD parameters or concentration-effect curves for edoxaban. |
| PGx | Parasrampuria_2016 | not_relevant | 0 | 0 | The paper reports drug-drug interactions (ketoconazole, erythromycin, cyclosporine) affecting edoxaban PK, but does not report pharmacogenomic effects (gene variants/genotypes). |
| PGx | Ragia_2019 | not_relevant | 0 | 0 | The paper is a general review of anticoagulation pharmacogenomics and does not report specific quantitative PK/PD effects of gene variants on edoxaban. |
| PGx | Raymond_2021 | not_relevant | 2 | 2 | The paper is a systematic review that explicitly states literature is scarce for edoxaban and does not report specific quantitative pharmacogenomic effects for edoxaban. |
| PGx | Rohr_2024 | not_relevant | 0 | 0 | The study investigates a drug-drug interaction (ritonavir) and does not report pharmacogenomic effects (gene variants) on edoxaban PK/PD. |
| PGx | Rosato_2024 | not_relevant | 0 | 0 | The paper investigates drug-drug interactions between DOACs and DAAs, not pharmacogenomic effects of gene variants on PK/PD parameters. |
| popPK | Shimizu_2017 | relevant | 10 | 0 | The paper describes a population pharmacokinetic model for edoxaban, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence text. |
| popPK | Song_2014 | relevant | 10 | 0 | The paper describes a population PK model for edoxaban, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence text. |
| PGx | Srinivasan_2022 | not_relevant | 2 | 1 | The text is a general review introduction that mentions pharmacogenetics as a topic but does not report specific gene-variant effects on edoxaban PK/PD parameters. |
| PGx | Stöllberger_2021 | not_relevant | 0 | 0 | The paper reviews drug-drug interactions (DDIs) in elderly patients and does not report pharmacogenomic effects of gene variants on edoxaban PK/PD. |
| PGx | Stöllberger_2023 | not_relevant | 0 | 0 | The paper is a narrative review of drug-drug interactions (DDI) and does not report pharmacogenomic effects of gene variants on edoxaban PK/PD parameters. |
| popPK | Terrier_2022 | relevant | 8 | 4 | The paper is a systematic review of PopPK models for edoxaban and reports median CL/F ranges (11.4-36.0 L/h) in the text, but detailed parameter values are in supplementary tables not fully provided. |
| PGx | Ueshima_2025 | not_relevant | 0 | 0 | The study explicitly concludes that genetic polymorphisms of CYP3A5 and ABCB1 did not significantly affect edoxaban pharmacokinetics. |
| PGx | Vandell_2017 | not_relevant | 0 | 0 | The study reports pharmacogenomic effects on warfarin PK/PD (dose, INR, bleeding), not edoxaban. |
| PGx | Verstraete_2026 | not_relevant | 0 | 0 | The paper investigates drug-drug interactions (calcineurin inhibitors) and clinical factors, not pharmacogenomic variants affecting edoxaban PK/PD. |
| PGx | Wang_2025 | not_relevant | 2 | 5 | The study reports associations between genetic variants and clinical outcomes (bleeding/thromboembolism) rather than direct pharmacokinetic or pharmacodynamic parameters (e.g., AUC, Cmax, INR). |
| PGx | Yang_2024 | not_relevant | 0 | 0 | The paper is a network meta-analysis of clinical outcomes (bleeding risk) with drug-drug interactions, not a pharmacogenomic study reporting gene-specific effects on PK/PD parameters. |
| popPK | Yin_2014_2 | relevant | 10 | 2 | The paper is a population PK study of edoxaban in humans, but the specific numeric parameter values (CL, V, etc.) are not listed in the provided abstract text, only qualitative changes and bioavailability. |
| popPK | Yin_2022 | relevant | 8 | 2 | The study reports population PK model estimates and steady-state exposure metrics (Cmin, Cavg) for edoxaban, but specific compartmental parameters (CL, V, Q, ka) are not explicitly listed in the provided text. |
| popPK | Yoshioka_2018 | irrelevant | 2 | 0 | The study is a model-based meta-analysis focusing on dose optimization and bleeding risk, and it does not report original quantitative pharmacokinetic parameter values (CL, V, etc.) for edoxaban in the provided evidence. |
| popPK | unknown_2024 | irrelevant | 0 | 0 | no_text gate: only 164 chars of text extracted (&lt; 400) |
| PD | unknown_2024 | not_relevant | 0 | 0 | The provided text is a correction notice regarding author affiliations and contains no pharmacodynamic data, models, or parameters. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-05 14:43 UTC</sub>
