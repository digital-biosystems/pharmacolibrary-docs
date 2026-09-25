<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A05A&quot;,&quot;href&quot;:&quot;atc/A05A.md&quot;},{&quot;label&quot;:&quot;elafibranor&quot;}]"></div>

# elafibranor

- **generic name:** elafibranor
- **ATC codes:** `A05AX06`
- **DrugBank:** [DB05187](https://go.drugbank.com/drugs/DB05187)
- **groups:** approved, investigational

## About

**Description.** Elafibranor is a dual peroxisome proliferator-activated receptor (PPAR) α and β/δ agonist [A263833] that works to inhibit bile acid synthesis.[L50768] On June 10, 2024, elafibranor was granted accelerated approval by the FDA for the treatment of primary biliary cholangitis (PBC).[L50773] The drug was also approved by the EMA on September 23, 2024.[L51878]

**Indication.** Elafibranor is indicated for the treatment of primary biliary cholangitis (PBC) in combination with [ursodeoxycholic acid] (UDCA) in adults who have had an inadequate response to UDCA, or as monotherapy in patients unable to tolerate UDCA.[L50768, L51873] In the US, this indication is approved under accelerated approval and is subject to change based on the determined clinical benefit of the drug in future confirmatory trials.[L50768]

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-18 13:39 | 2:50 | 0/0/0 | 0/1/0 | 0/0/0 | 110,321/1,638 | ollama / qwen3.8:27b-mtp-q8_0 | 7 | 0/7 | 7/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.75). The first reading is what the record holds.">cross-check: disputed</span> | [Ooi_2026](drugs/drug_elafibranor/pd_Ooi_2026_ALP.md) | Ooi QX et al., Population Pharmacokinetics and Pharmac…, CPT: pharmacometrics & syst… (2026) | [10.1002/psp4.70247](https://doi.org/10.1002/psp4.70247) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.75). The first reading is what the record holds.">cross-check: disputed</span> | [Ooi_2026](drugs/drug_elafibranor/pd_Ooi_2026_TB.md) | Ooi QX et al., Population Pharmacokinetics and Pharmac…, CPT: pharmacometrics & syst… (2026) | [10.1002/psp4.70247](https://doi.org/10.1002/psp4.70247) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=elafibranor) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCG2` inhibitor/substrate | DrugBank actor |
| absorption | liver | `ABCG2` inhibitor/substrate | DrugBank actor |
| absorption | mammary gland | `ABCG2` inhibitor/substrate | DrugBank actor |
| absorption | small intestine | `ABCG2` inhibitor/substrate | DrugBank actor |
| distribution | blood | `ALB` binder | DrugBank actor |
| metabolism | heart | `CYP2J2` substrate | DrugBank actor |
| metabolism | kidney | `UGT2B7` substrate | DrugBank actor |
| metabolism | liver | `CYP2C8` substrate, `CYP3A4` inducer, `UGT1A3` substrate, `UGT1A4` substrate, `UGT1A6` inhibitor, `UGT2B7` substrate | DrugBank actor |
| metabolism | small intestine | `CYP2J2` substrate, `CYP3A4` inducer, `UGT1A6` inhibitor, `UGT2B7` substrate | DrugBank actor |
| excretion | bile duct | <sub>“…subjects, approximately 77.1% of the dose was recovered in feces, primarily as elafibranor…”</sub> | prose |
| excretion | kidney | `ABCC2` inhibitor/substrate | DrugBank actor |
| excretion | liver | `ABCB11` inhibitor, `ABCC2` inhibitor/substrate, `ABCC3` inhibitor | DrugBank actor |
| excretion | small intestine | `ABCC2` inhibitor/substrate, `ABCC3` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: PPARA (target), PPARD (target), PPARG (target), PTGR1 (substrate).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 10 matched, 12 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Baandrup_2019 | irrelevant | 0 | 0 | The paper is a pharmacodynamic study assessing liver histopathology and morphometry in a mouse model, containing no pharmacokinetic parameters for elafibranor. |
| PD | Baandrup_2019 | not_relevant | 2 | 1 | The paper is a preclinical study validating biopsy-based histology against stereology in a mouse model; it reports single-dose treatment effects (percent change) but does not provide concentration-effect data, dose-response curves, or numeric PD parameters (Emax, EC50) for elafibranor. |
| popPK | Chen_2025 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on a new compound (compound 27) where elafibranor is only mentioned as a structural hybridization partner, with no pharmacokinetic data reported. |
| PD | Chen_2025 | not_relevant | 0 | 0 | The paper reports in vitro IC50/EC50 values for a newly discovered compound (compound 27), not for elafibranor, and does not provide any in vivo pharmacodynamic or exposure-response analysis for elafibranor. |
| popPK | Liu_2020 | irrelevant | 0 | 0 | The paper is a pharmacodynamic and gene expression study in a NASH mouse model and does not report any pharmacokinetic parameters for elafibranor. |
| popPK | Nestor_2022 | irrelevant | 0 | 0 | Elafibranor is used only as a comparator drug in a pharmacodynamic study, and the text explicitly states that its pharmacokinetic parameters were not assessed. |
| PD | Nestor_2022 | not_relevant | 2 | 1 | The paper is a preclinical efficacy study comparing ALT-801 to elafibranor; it reports group-level mean effects and statistical comparisons but does not provide concentration-effect data, PK/PD modeling, or numeric PD parameters (e.g., Emax, EC50) for elafibranor. |
| popPK | Ooi_2026 | relevant | 10 | 2 | The paper is a population PK study for elafibranor, but the specific numeric parameter estimates (CL, V, Q, etc.) are not present in the provided text, appearing only in the NONMEM code structure or referenced supplementary tables/figures. |
| popPK | Tølbøl_2018 | irrelevant | 0 | 0 | The study is a pharmacodynamic evaluation of NASH histopathology and metabolic effects in mice, reporting no pharmacokinetic parameters (CL, V, ka, etc.) for elafibranor. |
| PD | Tølbøl_2018 | not_relevant | 2 | 0 | The study reports qualitative and categorical histological improvements (scores) for a single fixed dose of elafibranor, but does not provide concentration-effect data, multiple dose levels, or numeric PD parameters (e.g., Emax, EC50) required to derive a pharmacodynamic relationship. |
| popPK | Xu_2024 | irrelevant | 0 | 0 | The paper is a review of flavonoid drugs and does not mention elafibranor or report any pharmacokinetic parameters for it. |
| PD | Xu_2024 | not_relevant | 0 | 0 | The paper is a cheminformatics and clinical development review of flavonoids and does not contain any pharmacodynamic modeling, exposure-response analysis, or numeric PD parameters for elafibranor. |
| PGx | Yu_2026 | not_relevant | 0 | 0 | The paper mentions elafibranor only as a weak CYP3A inducer in the context of drug-drug interactions, and does not report any pharmacogenomic effects on its PK or PD parameters. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
