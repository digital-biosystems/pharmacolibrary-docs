<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N06A&quot;,&quot;href&quot;:&quot;atc/N06A.md&quot;},{&quot;label&quot;:&quot;vortioxetine&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Vortioxetine_Areberg2014v2_reference&quot;,&quot;label&quot;:&quot;Areberg_2014_2_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_vortioxetine/Vortioxetine_Areberg2014v2_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# vortioxetine

- **generic name:** vortioxetine
- **ATC codes:** `N06AX26`
- **DrugBank:** [DB09068](https://go.drugbank.com/drugs/DB09068) · **PubChem:** [CID 71768094](https://pubchem.ncbi.nlm.nih.gov/compound/71768094)
- **molar mass:** 298.45 g/mol (C18H22N2S) — DrugBank
- **groups:** approved, investigational

## About

Vortioxetine is an antidepressant used to treat major depressive disorder and, according to some sources, anxiety. It is authorised in the European Union and is used as an approved medicine, though it also remains under investigation for other uses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q3563148](https://www.wikidata.org/wiki/Q3563148) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| vortioxetine | parent | 298.45 | C18H22N2S | DrugBank | [71768094](https://pubchem.ncbi.nlm.nih.gov/compound/71768094) | Frederiksen_2021_2 |
| Lu AA34443 | metabolite | 328.4 | — | PubChem | [118753351](https://pubchem.ncbi.nlm.nih.gov/compound/118753351) | Frederiksen_2021_2 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-26 20:58 | 1:25 | 0/3/2 | 1/0/0 | 0/0/0 | 42,273/1,575 | ollama / qwen3.8:27b-mtp-q8_0 | 15 | 0/5 | 5/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.429). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: unreported model parameter default(s): ka</sub><br><sub>route_to: `scholar`</sub> | [Areberg_2014_2_reference](drugs/drug_vortioxetine/Vortioxetine_Areberg2014v2_reference.md) | ▶ model + simulator | 1-compartment, oral | 3 | Areberg J et al., Population pharmacokinetic meta-analysi…, Basic & clinical pharmacolo… (2014) | [10.1111/bcpt.12256](https://doi.org/10.1111/bcpt.12256) |
| <span class="pk-badge pk-badge--orange">built, not shipped</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.769). The first reading is what the record holds.">cross-check: disputed</span><br><sub>caveat: the record defines covariate effects (weight on clearance, renal function …) but the engineer simulated only…</sub><br><sub>blocking: model_quarantined: F, Cl, Tlag left at base-class defaults</sub><br><sub>route_to: `scholar`</sub> | [Frederiksen_2021_2_reference](drugs/drug_vortioxetine/Vortioxetine_Frederiksen2021v2_reference.md) | held back | 1-compartment, oral | 11 (+2 cov.) | Frederiksen T et al., Quantification of In Vivo Metabolic Act…, Clinical pharmacology and t… (2021) | [10.1002/cpt.1972](https://doi.org/10.1002/cpt.1972) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Miao_2019_2_pooled_healthy_subjects_22_a](drugs/drug_vortioxetine/Vortioxetine_Miao2019v2_pooled_healthy_subjects_22_a.md) | — | 1-compartment (no model) | 4 | Miao J et al., Pharmacokinetics and Safety of Vortioxe…, Advances in therapy (2019) | [10.1007/s12325-019-01092-4](https://doi.org/10.1007/s12325-019-01092-4) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (partly confirmed, agreement 0.857). The first reading is what the record holds.">cross-check: partial</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Miao_2019_2_pooled_mdd_gad_patients_23_b](drugs/drug_vortioxetine/Vortioxetine_Miao2019v2_pooled_mdd_gad_patients_23_b.md) | — | 1-compartment (no model) | 3 | Miao J et al., Pharmacokinetics and Safety of Vortioxe…, Advances in therapy (2019) | [10.1007/s12325-019-01092-4](https://doi.org/10.1007/s12325-019-01092-4) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Naik_2016_2_reference](drugs/drug_vortioxetine/Vortioxetine_Naik2016v2_reference.md) | — | 1-compartment (no model) | 0 | Naik H et al., A Population Pharmacokinetic-Pharmacody…, Basic & clinical pharmacolo… (2016) | [10.1111/bcpt.12513](https://doi.org/10.1111/bcpt.12513) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.667). The first reading is what the record holds.">cross-check: disputed</span> | [Wilson_2015_ROL](drugs/drug_vortioxetine/pd_Wilson_2015_ROL.md) | REM onset latency ← vortioxetine/paroxetine · direct sigmoid Emax (Hill) effect | — | Wilson S et al., Differentiated effects of the multimoda…, Journal of psychopharmacolo… (2015) | [10.1177/0269881115599387](https://doi.org/10.1177/0269881115599387) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (?, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span> | [Wilson_2015_S1](drugs/drug_vortioxetine/pd_Wilson_2015_S1.md) | sleep stage 1 ← vortioxetine/paroxetine · direct sigmoid Emax (Hill) effect | — | Wilson S et al., Differentiated effects of the multimoda…, Journal of psychopharmacolo… (2015) | [10.1177/0269881115599387](https://doi.org/10.1177/0269881115599387) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.667). The first reading is what the record holds.">cross-check: disputed</span> | [Wilson_2015_TREM](drugs/drug_vortioxetine/pd_Wilson_2015_TREM.md) | time spent in REM sleep ← vortioxetine/paroxetine · direct sigmoid Emax (Hill) effect | — | Wilson S et al., Differentiated effects of the multimoda…, Journal of psychopharmacolo… (2015) | [10.1177/0269881115599387](https://doi.org/10.1177/0269881115599387) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.667). The first reading is what the record holds.">cross-check: disputed</span> | [Wilson_2015_TST](drugs/drug_vortioxetine/pd_Wilson_2015_TST.md) | total sleep time ← vortioxetine/paroxetine · direct sigmoid Emax (Hill) effect | — | Wilson S et al., Differentiated effects of the multimoda…, Journal of psychopharmacolo… (2015) | [10.1177/0269881115599387](https://doi.org/10.1177/0269881115599387) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.667). The first reading is what the record holds.">cross-check: disputed</span> | [Wilson_2015_WASO](drugs/drug_vortioxetine/pd_Wilson_2015_WASO.md) | wake after sleep onset ← vortioxetine/paroxetine · direct sigmoid Emax (Hill) effect | — | Wilson S et al., Differentiated effects of the multimoda…, Journal of psychopharmacolo… (2015) | [10.1177/0269881115599387](https://doi.org/10.1177/0269881115599387) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=vortioxetine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | brain | `CYP2D6` substrate | DrugBank actor |
| metabolism | kidney | `CYP3A5` substrate | DrugBank actor |
| metabolism | liver | `CYP2A6` substrate, `CYP2B6` substrate, `CYP2C19` substrate, `CYP2C8` substrate, `CYP2C9` substrate, `CYP2D6` substrate, `CYP3A4` substrate, `CYP3A5` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate, `CYP3A5` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |
| — | brain | `SLC6A4` inhibitor | DrugBank actor |
| — | platelet | `SLC6A4` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: ADRB1 (target), HTR1A (target), HTR1B (partial agonist), HTR3A (target), HTR7 (target), SLC6A2 (blocker).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 11 matched, 11 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 5  ·  extracted 0  ·  needs_review 2  ·  rejected 3  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bundgaard_2016 | irrelevant | 2 | 0 | The study is an animal mechanistic investigation of P-gp transport at the blood-brain barrier, reporting exposure ratios and Kp,uu values rather than standard quantitative population-pharmacokinetic parameters (CL, V, ka) for vortioxetine. |
| PD | Bundgaard_2016 | not_relevant | 1 | 0 | The paper focuses on P-gp transport and brain distribution (PK) of vortioxetine, reporting no concentration-effect or dose-response PD parameters for the drug itself. |
| popPK | Frederiksen_2021 | relevant | 8 | 2 | The paper validates a population PK model for vortioxetine but does not report the specific numeric parameter estimates (CL, V, etc.) in the text, referring instead to the original study and supplementary material. |
| popPK | Frederiksen_2023 | irrelevant | 2 | 0 | The paper is a pharmacogenetic analysis of CYP2D6 activity using vortioxetine as a probe substrate, and it does not report quantitative PK parameter values (CL, V, etc.) for vortioxetine in the provided text. |
| popPK | Frederiksen_2023_2 | irrelevant | 2 | 0 | The paper is a review discussing CYP2D6 genotype-phenotype translation and mentions vortioxetine only as a substrate in meta-analyses, without providing original quantitative PK parameter values in the evidence. |
| popPK | Ratajczak_2019 | irrelevant | 0 | 0 | The study is a behavioral pharmacology experiment in rats assessing antidepressant efficacy, not a pharmacokinetic study, and reports no quantitative disposition parameters for vortioxetine. |
| popPK | Wilson_2015 | irrelevant | 2 | 0 | The study is a PK/PD sleep architecture trial that uses a pre-existing population PK model to estimate exposure (Cav,sleep) but does not report original quantitative disposition parameters (CL, V, Q, ka) for vortioxetine. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-09-26 20:57 UTC</sub>
