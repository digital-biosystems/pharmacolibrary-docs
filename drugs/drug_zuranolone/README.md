<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N06A&quot;,&quot;href&quot;:&quot;atc/N06A.md&quot;},{&quot;label&quot;:&quot;zuranolone&quot;}]"></div>

# zuranolone

- **generic name:** zuranolone
- **ATC codes:** `N06AX31`
- **DrugBank:** [DB15490](https://go.drugbank.com/drugs/DB15490)
- **groups:** approved, investigational

## About

**Description.** Zuranolone is a neuroactive steroid that acts as a positive allosteric modulator of the GABA<sub>A</sub> receptors. Unlike other more common GABA<sub>A</sub> positive allosteric modulators on the market like benzodiazepines, zuranolone can modulate both synaptic and extrasynaptic GABA<sub>A</sub> conductance due to binding to a non-benzodiazepine site on the receptor.[A260776,A260786] Zuranolone was designed with a pharmacological profile of a neuroactive steroid in mind while also possessing a pharmacokinetics profile of an oral, once-daily dosing formulation.[A260791]

Zuranolone was approved by the FDA on August 4th, 2023, and it is currently the only approved treatment for women with postpartum depression. This approval was based on favorable results from 2 phase 3 clinical trials.[L47691]

**Indication.** Zuranolone is indicated for the treatment of postpartum depression (PPD) in adults.[L47686]

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-24 21:54 | 5:16 | 0/0/0 | 0/0/0 | 0/0/0 | 43,784/1,656 | ollama / qwen3.8:27b-mtp-q8_0 | 5 | 0/3 | 3/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=zuranolone) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |
| excretion | bile duct | <sub>“…metabolites with negligible unchanged zuranolone and 41% in feces as metabolites with less…”</sub> | prose |
| excretion | kidney | <sub>“…f radiolabeled zuranolone, 45% of the dose was recovered in urine as metabolites with negl…”</sub> | prose |

<sub>Actors without a tissue in the table: GABRA1 (positive allosteric modulator), GABRG3 (modulator).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 18 matched, 16 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Dunbar_2024.pdf` | Dunbar J et al., Cognitive effects, pharmacokinetics, an…, Journal of psychopharmacolo… (2024) | popPK | 10 | [10.1177/02698811241282777](https://doi.org/10.1177/02698811241282777) | [39394685](https://pubmed.ncbi.nlm.nih.gov/39394685) | The paper is a Phase 1 PK study of zuranolone, but the provided evidence contains only the abstract and lacks the specific numeric PK parameter values (CL, V, etc.) which are likely in the full text or tables not included. |
| `DeBattista_2024.pdf` | DeBattista C et al., The Black Book of Psychotropic Dosing a…, Psychopharmacology bulletin (2024) | pgx | 7 | [10.64719/pb.4493](https://doi.org/10.64719/pb.4493) | [38993656](https://www.ncbi.nlm.nih.gov/pubmed/38993656) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |

<sub>queue written 2026-09-24T21:53:49.504582+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bu_2026 | irrelevant | 0 | 0 | The paper is a narrative review of pharmacotherapy for depressive disorders and does not report original quantitative pharmacokinetic parameters for zuranolone. |
| PD | Bu_2026 | not_relevant | 1 | 0 | The text is a narrative review that qualitatively discusses zuranolone and PK/PD variability but does not report specific numeric PD parameters or exposure-response relationships. |
| PGx | Bu_2026 | not_relevant | 0 | 0 | The paper is a narrative review of next-generation depression pharmacotherapy that mentions zuranolone and pharmacogenomics generally, but does not report specific gene variant effects on zuranolone's PK or PD parameters. |
| popPK | DeBattista_2024 | irrelevant | 0 | 0 | The paper is a review of psychotropic dosing and monitoring that does not report original quantitative pharmacokinetic parameters for zuranolone. |
| PD | DeBattista_2024 | not_relevant | 1 | 0 | The paper is a review (Black Book) providing dosing and monitoring guidelines, not a primary study reporting specific numeric pharmacodynamic parameters or exposure-response models for zuranolone. |
| PGx | DeBattista_2024 | not_relevant | 0 | 0 | The paper is a general review of psychotropic dosing and monitoring and does not report specific pharmacogenomic effects on zuranolone PK/PD parameters. |
| popPK | Dunbar_2024 | relevant | 10 | 0 | The paper is a Phase 1 PK study of zuranolone, but the provided evidence contains only the abstract and lacks the specific numeric PK parameter values (CL, V, etc.) which are likely in the full text or tables not included. |
| PD | Dunbar_2024 | not_relevant | 2 | 1 | The paper reports qualitative cognitive effects and PK data but does not provide a quantitative exposure-response or dose-response model with numeric PD parameters (e.g., Emax, EC50) in the provided text. |
| popPK | Lin_2023 | irrelevant | 0 | 0 | The paper is a meta-analysis of efficacy and safety outcomes (SMDs, ORs) and does not report any pharmacokinetic parameters for zuranolone. |
| popPK | Ma_2024 | irrelevant | 1 | 0 | The paper focuses on the design and synthesis of a new derivative (S28) and its in vitro/in vivo activity, without reporting quantitative PK parameters for zuranolone itself. |
| PD | Ma_2024 | not_relevant | 1 | 0 | The text is a summary of a medicinal chemistry study on analogs (S28) that mentions "robust in vivo pharmacodynamic (PD) effects" qualitatively but provides no numeric PD parameters, concentration-effect curves, or dose-response data for zuranolone or the analogs. |
| popPK | Prommer_2026 | irrelevant | 1 | 0 | The paper is a clinical review discussing pharmacology and practicality in palliative care, containing no original quantitative pharmacokinetic parameter values for zuranolone. |
| PD | Prommer_2026 | not_relevant | 2 | 0 | The text is a qualitative review of zuranolone's pharmacology and clinical utility in palliative care, containing no numeric PD parameters, exposure-response data, or dose-effect curves. |
| popPK | Scala_2023 | irrelevant | 0 | 0 | The paper is a narrative review of clinical efficacy and tolerability profiles, not a pharmacokinetic study, and contains no quantitative PK parameters for zuranolone. |
| PD | Scala_2023 | not_relevant | 1 | 0 | The paper is a narrative review discussing clinical efficacy and tolerability profiles, not a pharmacokinetic/pharmacodynamic modeling study, and does not report numeric PD parameters like Emax or EC50 for zuranolone. |
| popPK | Suthoff_2022 | irrelevant | 0 | 0 | The paper is a secondary analysis of health-related quality of life outcomes and does not report any pharmacokinetic parameters for zuranolone. |
| popPK | Wald_2022 | irrelevant | 0 | 0 | The study focuses on brexanolone (and its metabolite allopregnanolone), not zuranolone. |
| PD | Wald_2022 | not_relevant | 0 | 0 | The paper reports population pharmacokinetic (PopPK) modeling of brexanolone/allopregnanolone concentrations in plasma and breast milk to determine relative infant dose, but it does not report any pharmacodynamic (PD) or exposure-response relationship (e.g., Emax, EC50, effect vs. concentration) for zuranolone or any other drug. |
| popPK | Yang_2025 | irrelevant | 2 | 5 | The study focuses on a novel analog (S9) with zuranolone serving only as a comparator, and while comparative PK values for zuranolone are present, they are not the primary subject of the investigation. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
