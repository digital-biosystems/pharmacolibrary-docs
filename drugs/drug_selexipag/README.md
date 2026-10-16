<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B01A&quot;,&quot;href&quot;:&quot;atc/B01A.md&quot;},{&quot;label&quot;:&quot;selexipag&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Selexipag_Ruehs2021_reference&quot;,&quot;label&quot;:&quot;Ruehs_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_selexipag/Selexipag_Ruehs2021_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# selexipag

- **generic name:** selexipag
- **ATC codes:** `B01AC27`
- **DrugBank:** [DB11362](https://go.drugbank.com/drugs/DB11362) · **PubChem:** [CID 9913767](https://pubchem.ncbi.nlm.nih.gov/compound/9913767)
- **molar mass:** 496.63 g/mol (C26H32N4O4S) — DrugBank
- **groups:** approved, investigational

## About

Selexipag is a drug used to treat pulmonary hypertension. It is an approved antithrombotic medicine and is authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q15424759](https://www.wikidata.org/wiki/Q15424759) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| selexipag | parent | 496.63 | C26H32N4O4S | DrugBank | [9913767](https://pubchem.ncbi.nlm.nih.gov/compound/9913767) | Axelsen_2021, Axelsen_2024, Krause_2017 |
| ACT-333679 | metabolite | 419.525 | C25H29N3O3 | PubChem | [9931891](https://pubchem.ncbi.nlm.nih.gov/compound/9931891) | Axelsen_2021, Krause_2017 |
| JNJ-68006861 | metabolite | — (mass units only) | — | — | — | — |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-14 21:43 | 2:41 | 0/5/1 | 1/0/0 | 1/0/1 | 133,471/8,402 | einfracz / qwen3.8-27b | 6 | 2/7 | 6/0 | 3 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span><br><sub>blocking: unreported model parameter default(s): ka</sub><br><sub>route_to: `scholar`</sub> | [Ruehs_2021_reference](drugs/drug_selexipag/Selexipag_Ruehs2021_reference.md) | ▶ model + simulator | 1-compartment, oral | 2 | Ruehs H et al., Population Pharmacokinetics and Pharmac…, Clinical pharmacokinetics (2021) | [10.1007/s40262-021-01024-y](https://doi.org/10.1007/s40262-021-01024-y) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.667). Primary extraction retained.">cross-check: partial</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Axelsen_2021_reference](drugs/drug_selexipag/Selexipag_Axelsen2021_reference.md) | — | 1-compartment (no model) | 0 | Axelsen LN et al., Clopidogrel, a CYP2C8 inhibitor, causes…, British journal of clinical… (2021) | [10.1111/bcp.14365](https://doi.org/10.1111/bcp.14365) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.571). Primary extraction retained.">cross-check: partial</span><br><sub>blocking: missing key parameters — none reported by this paper (the values present come f…</sub><br><sub>route_to: `human_review`</sub> | [Axelsen_2024_adult_population_pk_model](drugs/drug_selexipag/Selexipag_Axelsen2024_adult_population_pk_model.md) | — | parent + metabolite (no model) | 2 | Axelsen LN et al., Population pharmacokinetics of selexipa…, CPT: pharmacometrics & syst… (2024) | [10.1002/psp4.13231](https://doi.org/10.1002/psp4.13231) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.571). Primary extraction retained.">cross-check: partial</span><br><sub>blocking: missing key parameters — none reported by this paper (the values present come f…</sub><br><sub>route_to: `human_review`</sub> | [Axelsen_2024_pediatric_population_pk_model](drugs/drug_selexipag/Selexipag_Axelsen2024_pediatric_population_pk_model.md) | — | parent + metabolite (no model) | 2 | Axelsen LN et al., Population pharmacokinetics of selexipa…, CPT: pharmacometrics & syst… (2024) | [10.1002/psp4.13231](https://doi.org/10.1002/psp4.13231) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.571). Primary extraction retained.">cross-check: partial</span><br><sub>blocking: missing key parameters — none reported by this paper (the values present come f…</sub><br><sub>route_to: `human_review`</sub> | [Axelsen_2024_reference](drugs/drug_selexipag/Selexipag_Axelsen2024_reference.md) | — | parent + metabolite (no model) | 2 | Axelsen LN et al., Population pharmacokinetics of selexipa…, CPT: pharmacometrics & syst… (2024) | [10.1002/psp4.13231](https://doi.org/10.1002/psp4.13231) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.515). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Krause_2017_reference](drugs/drug_selexipag/Selexipag_Krause2017_reference.md) | — | general linear (no model) | 13 (+3 cov.) | Krause A et al., Population Modeling of Selexipag Pharma…, CPT: pharmacometrics & syst… (2017) | [10.1002/psp4.12202](https://doi.org/10.1002/psp4.12202) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:gpt-oss-120b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 0.50).">rat</span> | [Gatfield_2017_arrestin_recruitment](drugs/drug_selexipag/pd_Gatfield_2017_arrestin_recruitment.md) | β-arrestin recruitment ← ACT-333679 · direct Emax (saturable) effect | — | Gatfield J et al., Selexipag Active Metabolite ACT-333679…, The Journal of pharmacology… (2017) | [10.1124/jpet.116.239665](https://doi.org/10.1124/jpet.116.239665) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 0.50).">rat</span> | [Gatfield_2017_cAMP_accumulation](drugs/drug_selexipag/pd_Gatfield_2017_cAMP_accumulation.md) | cAMP accumulation ← ACT-333679 · direct Emax (saturable) effect | — | Gatfield J et al., Selexipag Active Metabolite ACT-333679…, The Journal of pharmacology… (2017) | [10.1124/jpet.116.239665](https://doi.org/10.1124/jpet.116.239665) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:gpt-oss-120b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 0.50).">rat</span> | [Gatfield_2017_cell_proliferation](drugs/drug_selexipag/pd_Gatfield_2017_cell_proliferation.md) | cell proliferation ← ACT-333679 · direct Emax (saturable) effect | — | Gatfield J et al., Selexipag Active Metabolite ACT-333679…, The Journal of pharmacology… (2017) | [10.1124/jpet.116.239665](https://doi.org/10.1124/jpet.116.239665) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:gpt-oss-120b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 0.50).">rat</span> | [Gatfield_2017_cellular_relaxation](drugs/drug_selexipag/pd_Gatfield_2017_cellular_relaxation.md) | cellular relaxation ← ACT-333679 · direct Emax (saturable) effect | — | Gatfield J et al., Selexipag Active Metabolite ACT-333679…, The Journal of pharmacology… (2017) | [10.1124/jpet.116.239665](https://doi.org/10.1124/jpet.116.239665) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:gpt-oss-120b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 0.50).">rat</span> | [Gatfield_2017_extracellular_matrix_synthesis](drugs/drug_selexipag/pd_Gatfield_2017_extracellular_matrix_synthesis.md) | extracellular matrix synthesis ← ACT-333679 · direct Emax (saturable) effect | — | Gatfield J et al., Selexipag Active Metabolite ACT-333679…, The Journal of pharmacology… (2017) | [10.1124/jpet.116.239665](https://doi.org/10.1124/jpet.116.239665) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="Adverse-reaction risk allele; no quantitative PK/PD parameter effect.">safety allele</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0), gpt-oss:120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓ 2/2</span> | **CYP2C9** | `safety` — adverse-reaction risk (HLA / safety allele) — no parameter shift | safety_allele | [Lattanzio_2022](drugs/drug_selexipag/pgx_Lattanzio_2022_CYP2C9_safety.md) | Lattanzio M et al., Pharmacological counseling in hepatotox…, Journal of medical case rep… (2022) | [10.1186/s13256-022-03571-9](https://doi.org/10.1186/s13256-022-03571-9) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (confirmed, agreement 1.0), gpt-oss:120b (?, agreement 0.25). Primary extraction retained.">cross-check: partial 1/2</span> | **CYP2C8** | `Q27` · CL/F | metabolism | [Lattanzio_2022](drugs/drug_selexipag/pgx_Lattanzio_2022_CYP2C8_Q27.md) | Lattanzio M et al., Pharmacological counseling in hepatotox…, Journal of medical case rep… (2022) | [10.1186/s13256-022-03571-9](https://doi.org/10.1186/s13256-022-03571-9) |

<details class="pk-legend"><summary>PGx evidence and model availability</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>Phenotype/genotype-specific effect on a named model parameter (θ).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>Gene–drug association without a quantitative parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>CPIC/DPWG-derived estimate, not a primary-paper estimate.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>Adverse-reaction risk allele; no quantitative PK/PD parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>Phenotype-specific browser simulation and downloadable PGx model available.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>PGx model available; browser simulation unavailable.</td></tr></tbody></table></details>

<details class="legend">
<summary>PGx field definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>gene</code></td><td>Associated gene; papers with multiple genes contribute multiple records.</td></tr><tr><td><code>affects</code></td><td>Target PK/PD parameter (Q-code and name); θ scales its baseline value. Q100 denotes a non-parameter association; safety denotes adverse-reaction risk. PA identifiers indicate ClinPGx/PharmGKB guideline-derived records.</td></tr><tr><td><code>mechanism</code></td><td>Metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>Source-paper identifier and full-record link.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=selexipag).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` substrate | DrugBank actor |
| absorption | kidney | `ABCB1` substrate | DrugBank actor |
| absorption | liver | `ABCB1` substrate | DrugBank actor |
| absorption | placenta | `ABCB1` substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` substrate | DrugBank actor |
| absorption | testis | `ABCB1` substrate | DrugBank actor |
| metabolism | liver | `CES1` substrate, `CYP2C8` metabolism/substrate, `CYP2C9` safety_allele, `CYP3A4` substrate, `SLCO1B1` substrate, `SLCO1B3` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: PTGIR (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 33 matched, 33 returned
- **screened:** 3  ·  **relevant:** 2
- **records:** 6  ·  extracted 0  ·  needs_review 1  ·  rejected 5  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_3 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Gnerre_2018.pdf` | Gnerre C et al., The metabolism and drug-drug interactio…, Xenobiotica; the fate of fo… (2018) | pgx | 7 | [10.1080/00498254.2017.1357088](https://doi.org/10.1080/00498254.2017.1357088) | [28737453](https://www.ncbi.nlm.nih.gov/pubmed/28737453) | metadata signals extractable PGX data (CYP2C8, PK/PD-context) |
| `Juif_2017.pdf` | Juif PE et al., A pharmacokinetic drug-drug interaction…, European journal of clinica… (2017) | pgx | 7 | [10.1007/s00228-017-2282-7](https://doi.org/10.1007/s00228-017-2282-7) | [28639119](https://www.ncbi.nlm.nih.gov/pubmed/28639119) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Kaufmann_2015.pdf` | Kaufmann P et al., Effect of lopinavir/ritonavir on the ph…, British journal of clinical… (2015) | pgx | 7 | [10.1111/bcp.12650](https://doi.org/10.1111/bcp.12650) | [25851691](https://www.ncbi.nlm.nih.gov/pubmed/25851691) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |

<sub>queue written 2026-10-14T21:41:35.357711+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Axelsen_2021 | relevant | 6 | 2 | The study is a PK interaction study of selexipag in humans that develops a compartmental model for its metabolite, but specific parameter values (CL, V, ka) are not reported in the provided evidence, only NCA metrics and simulated exposure. |
| PD | Axelsen_2021 | not_relevant | 0 | 0 | The study reports only pharmacokinetic (PK) parameters (AUC, Cmax) and drug-drug interaction ratios; it does not report any pharmacodynamic (PD) or exposure-response relationship for selexipag. |
| PGx | Axelsen_2021 | not_relevant | 2 | 8 | The study demonstrates that the effect of clopidogrel on selexipag PK is comparable across all CYP2C8 genotypes, indicating no significant pharmacogenomic effect on PK parameters. |
| PD | Axelsen_2024 | not_relevant | 0 | 0 | The paper focuses exclusively on population pharmacokinetics (PK) and dose selection based on exposure matching, with no pharmacodynamic (PD) or exposure-response modeling or numeric PD parameters reported. |
| popPK | Bruderer_2014 | relevant | 8 | 4 | The study reports quantitative PK parameters (half-life) for selexipag, but lacks other key disposition parameters like clearance or volume of distribution. |
| PD | Bruderer_2014 | not_relevant | 2 | 1 | The study reports PK parameters and qualitative safety data, but explicitly states that platelet aggregation effects were variable without an obvious dose-dependent pattern, providing no numeric PD parameters or extractable exposure-response relationship. |
| popPK | Bruderer_2016 | irrelevant | 2 | 0 | The study is a drug-drug interaction trial that reports only geometric mean ratios and qualitative statements about steady-state AUC, lacking specific quantitative PK parameter values (e.g., CL, V, t1/2) for selexipag. |
| PD | Bruderer_2016 | not_relevant | 0 | 0 | The study reports a lack of interaction (GMRs for INR and PK parameters) but does not provide a concentration-effect or dose-response model with numeric PD parameters (e.g., Emax, EC50) for selexipag. |
| popPK | Gatfield_2017 | irrelevant | 0 | 0 | The paper describes in vitro pharmacodynamics (receptor binding, cellular relaxation) and in vivo efficacy in rats, but does not report pharmacokinetic disposition parameters for selexipag. |
| popPK | Genecand_2021 | irrelevant | 2 | 0 | The paper is a review article that discusses selexipag's pharmacokinetics but does not provide original quantitative disposition parameters or numeric values in the provided evidence. |
| PD | Genecand_2021 | not_relevant | 2 | 1 | The text is a review article summary that mentions pharmacodynamics qualitatively but does not provide specific numeric PD parameters or exposure-response data. |
| popPK | Ghosh_2017 | irrelevant | 2 | 0 | The paper is a review summarizing existing studies and does not present original quantitative pharmacokinetic parameter values for selexipag in the provided evidence. |
| PD | Ghosh_2017 | not_relevant | 2 | 1 | The text is a review summary that qualitatively describes efficacy outcomes (e.g., 6-minute walk distance, mortality) but does not provide specific numeric PD parameters (Emax, EC50) or concentration-effect curves. |
| PGx | Gnerre_2018 | not_relevant | 0 | 0 | The paper details metabolic pathways and drug-drug interaction potential but does not report any gene variant or genotype effects on selexipag's PK/PD. |
| popPK | Hoch_2015 | irrelevant | 1 | 0 | The paper is a thorough QT study focused on cardiac repolarization and does not report quantitative pharmacokinetic disposition parameters (CL, V, etc.) for selexipag. |
| PD | Hoch_2015 | not_relevant | 3 | 2 | The paper reports a qualitative conclusion that no exposure-response relationship was demonstrated for selexipag, without providing numeric PD parameters or a derivable concentration-effect curve. |
| popPK | Honorato_2017 | irrelevant | 1 | 0 | The paper is a pharmacology review that discusses selexipag's pharmacokinetics qualitatively but does not provide original quantitative disposition parameters or numeric values. |
| PD | Honorato_2017 | not_relevant | 2 | 1 | The text is a qualitative pharmacology review summary that discusses general pharmacodynamic properties and safety but does not provide specific numeric PD parameters (e.g., EC50, Emax) or exposure-response data for selexipag. |
| PGx | Juif_2017 | not_relevant | 0 | 0 | The study investigates a drug-drug interaction (selexipag on midazolam), not the effect of a genetic variant on selexipag's PK or PD. |
| PGx | Kaufmann_2015 | not_relevant | 0 | 0 | The study investigates a drug-drug interaction with lopinavir/ritonavir, not a pharmacogenomic effect based on gene variants. |
| PGx | Lattanzio_2022 | not_relevant | 5 | 1 | The paper is a case report describing a clinical toxicity event (hepatotoxicity) associated with a poor metabolizer genotype, but it does not report quantitative changes in PK parameters (e.g., AUC, half-life) or fitted effect sizes for selexipag. |
| popPK | Lindegaard_2020 | irrelevant | 0 | 0 | The paper is a review focused on treprostinil, and selexipag is only mentioned as a comparator drug without any quantitative pharmacokinetic parameters provided. |
| PD | Lindegaard_2020 | not_relevant | 1 | 0 | The paper is a mini-review of treprostinil and only mentions selexipag as a comparator without providing any specific pharmacodynamic data or exposure-response parameters for it. |
| popPK | Najjar_2020 | irrelevant | 0 | 0 | The paper is a review of prodrugs and does not report quantitative pharmacokinetic parameters for selexipag. |
| PD | Najjar_2020 | not_relevant | 0 | 0 | The paper is a general review of prodrugs and does not contain specific pharmacodynamic or exposure-response data for selexipag. |
| popPK | Oriaku_2020 | irrelevant | 0 | 0 | This is a clinical case report describing a drug transition and hemodynamic changes, not a pharmacokinetic study, and it contains no quantitative PK parameters (CL, V, ka, etc.) for selexipag. |
| PD | Oriaku_2020 | not_relevant | 1 | 0 | The paper is a single case report describing a drug transition with qualitative and percentage-based hemodynamic improvements, but it does not report any concentration-effect data, dose-response curves, or numeric PD parameters (e.g., Emax, EC50) for selexipag. |
| popPK | Ruehs_2021 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for vericiguat, not selexipag. |
| popPK | Sardana_2016 | irrelevant | 2 | 0 | The paper is a review article discussing the development and clinical trials of selexipag, but the provided evidence contains no original quantitative pharmacokinetic parameter values (e.g., CL, V, t1/2). |
| PD | Sardana_2016 | not_relevant | 2 | 1 | The text is an abstract of a review article that discusses the pharmacodynamics of selexipag qualitatively but does not provide specific numeric PD parameters or exposure-response data. |
| popPK | Skoro-Sajer_2014 | irrelevant | 0 | 0 | The paper is a Phase 3 clinical efficacy and safety trial (GRIPHON) reporting clinical endpoints, not a pharmacokinetic study with disposition parameters. |
| PD | Skoro-Sajer_2014 | not_relevant | 0 | 0 | The paper is a Phase 3 clinical trial (GRIPHON) reporting clinical efficacy and safety outcomes (time-to-event, 6MWD) but does not contain pharmacokinetic data, concentration-effect modeling, or numeric PD parameters (e.g., Emax, EC50). |
| popPK | Varian_2024 | irrelevant | 0 | 0 | The paper is a clinical trial protocol for pulmonary arterial hypertension that uses selexipag as a therapeutic agent but does not report any pharmacokinetic parameters or disposition data. |
| PD | Varian_2024 | not_relevant | 0 | 0 | The text is a study protocol for a clinical trial comparing therapeutic strategies and does not report any pharmacokinetic or pharmacodynamic data, exposure-response relationships, or numeric PD parameters. |
| PGx | Wu_2022 | not_relevant | 0 | 0 | The paper reviews drug-drug interactions (DDIs) involving CYP enzymes, not pharmacogenomic effects of specific gene variants on selexipag pharmacokinetics or pharmacodynamics. |
| popPK | Zhang_2024 | irrelevant | 0 | 0 | The paper is a pharmacovigilance study of PDE5 inhibitors (hearing impairment) and does not involve selexipag or any pharmacokinetic analysis. |
| PD | Zhang_2024 | not_relevant | 0 | 0 | The paper is a pharmacovigilance study analyzing adverse event reports (hearing impairment) for PDE5 inhibitors using disproportionality analysis; it does not report any pharmacodynamic, exposure-response, or dose-response relationships or numeric PD parameters for selexipag. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-14 21:41 UTC</sub>
