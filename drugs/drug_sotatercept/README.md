<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C02K&quot;,&quot;href&quot;:&quot;atc/C02K.md&quot;},{&quot;label&quot;:&quot;sotatercept&quot;}]"></div>

# sotatercept

- **generic name:** sotatercept
- **ATC codes:** `C02KX06`
- **DrugBank:** [DB12118](https://go.drugbank.com/drugs/DB12118) · **PubChem:** not captured
- **groups:** approved, investigational

## About

**Description.** Sotatercept is an activin signalling inhibitor. It is a homodimeric recombinant fusion protein consisting of the extracellular domain of the human activin receptor type IIA (ActRIIA) linked to the human IgG1 Fc domain.[L50351]

On March 26, 2024, sotatercept was approved by the FDA for the treatment of pulmonary arterial hypertension (PAH).[L50361] Sotatercept works to resolve the imbalance in activin–growth differentiation factor and BMP pathway signalling observed in PAH.[A263481] Sotatercept was approved by the European Commission on August 26, 2024.[L51549]

**Indication.** Sotatercept is indicated for the treatment of adults with pulmonary arterial hypertension (PAH, World Health Organization [WHO] Group 1) to increase exercise capacity, improve WHO functional class (FC), and reduce the risk of clinical worsening events, including hospitalization for PAH, lung transplantation, and death.[L50351, L54526]

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-30 06:53 | 1:57 | 0/0/0 | 0/1/0 | 0/0/0 | 5,419/355 | ollama / qwen3.8:27b-mtp-q8_0 | 2 | 0/2 | 2/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> | [Rothman_2025_CO](drugs/drug_sotatercept/pd_Rothman_2025_CO.md) | cardiac output ← imatinib · inhibition effect | — | Rothman AMK et al., Positioning Imatinib for Pulmonary Arte…, American journal of respira… (2025) | [10.1164/rccm.202410-1929oc](https://doi.org/10.1164/rccm.202410-1929oc) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Rothman_2025_HR](drugs/drug_sotatercept/pd_Rothman_2025_HR.md) | night heart rate ← imatinib · inhibition effect | — | Rothman AMK et al., Positioning Imatinib for Pulmonary Arte…, American journal of respira… (2025) | [10.1164/rccm.202410-1929oc](https://doi.org/10.1164/rccm.202410-1929oc) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Rothman_2025_TPR](drugs/drug_sotatercept/pd_Rothman_2025_TPR.md) | total pulmonary resistance ← imatinib · inhibition effect | — | Rothman AMK et al., Positioning Imatinib for Pulmonary Arte…, American journal of respira… (2025) | [10.1164/rccm.202410-1929oc](https://doi.org/10.1164/rccm.202410-1929oc) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Rothman_2025_mPAP](drugs/drug_sotatercept/pd_Rothman_2025_mPAP.md) | mean pulmonary artery pressure ← imatinib · inhibition effect | — | Rothman AMK et al., Positioning Imatinib for Pulmonary Arte…, American journal of respira… (2025) | [10.1164/rccm.202410-1929oc](https://doi.org/10.1164/rccm.202410-1929oc) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Rothman_2025_physical_activity](drugs/drug_sotatercept/pd_Rothman_2025_physical_activity.md) | physical activity ← imatinib · inhibition effect | — | Rothman AMK et al., Positioning Imatinib for Pulmonary Arte…, American journal of respira… (2025) | [10.1164/rccm.202410-1929oc](https://doi.org/10.1164/rccm.202410-1929oc) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=sotatercept) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | skin | <sub>“…Following subcutaneous administration, the absolute bioavailability of sotatercept is appr…”</sub> | prose |

<sub>Actors without a tissue in the table: ACVR1B (binder), ACVR2A (binder), GDF11 (binder), MSTN (binder).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 14 matched, 14 returned
- **screened:** 1  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Ait-Oudhia_2024.pdf` | Ait-Oudhia S et al., Population pharmacokinetic modeling of…, CPT: pharmacometrics & syst… (2024) | popPK | 10 | [10.1002/psp4.13166](https://doi.org/10.1002/psp4.13166) | [38812074](https://pubmed.ncbi.nlm.nih.gov/38812074) | The paper is a population PK study for sotatercept, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract text. |
| `Sherman_2013.pdf` | Sherman ML et al., Multiple-dose, safety, pharmacokinetic,…, Journal of clinical pharmac… (2013) | popPK | 8 | [10.1002/jcph.160](https://doi.org/10.1002/jcph.160) | [23939631](https://pubmed.ncbi.nlm.nih.gov/23939631) | The paper is a PK study of sotatercept reporting a terminal half-life, but lacks other quantitative disposition parameters like clearance or volume of distribution in the provided text. |
| `Ait-Oudhia_2025.pdf` | Ait-Oudhia S et al., Population Pharmacokinetic/Pharmacodyna…, Clinical pharmacology and t… (2025) | pd | 5 | [10.1002/cpt.3524](https://doi.org/10.1002/cpt.3524) | [39668469](https://www.ncbi.nlm.nih.gov/pubmed/39668469) | metadata signals extractable PD data (Exposure-Response) |

<sub>queue written 2026-09-30T06:53:11.551367+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Ait-Oudhia_2024 | relevant | 10 | 2 | The paper is a population PK study for sotatercept, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract text. |
| PD | Ait-Oudhia_2024 | not_relevant | 0 | 0 | The paper focuses exclusively on population pharmacokinetic (PK) modeling and does not report pharmacodynamic (PD) or exposure-response relationships. |
| popPK | Ait-Oudhia_2025 | irrelevant | 0 | 0 | no_text gate: only 171 chars of text extracted (&lt; 400) |
| PGx | Bose_2019 | not_relevant | 0 | 0 | The paper is a review of myelofibrosis treatments and does not mention sotatercept or any pharmacogenomic effects on its PK/PD parameters. |
| popPK | Cabré_2026 | irrelevant | 0 | 0 | The paper is a narrative review of cardiovascular pharmacotherapy that does not report any quantitative pharmacokinetic parameters for sotatercept. |
| PD | Cabré_2026 | not_relevant | 0 | 0 | The text is a narrative review of cardiovascular pharmacotherapy and does not contain any specific data, analysis, or numeric parameters for sotatercept. |
| popPK | Coyne_2019 | irrelevant | 0 | 0 | The paper reports clinical efficacy and safety outcomes (hemoglobin, bone density, vascular calcification) but contains no pharmacokinetic parameters or disposition data for sotatercept. |
| PGx | Miranda_2025 | not_relevant | 0 | 0 | The paper explicitly states that BMPR2 genetic variant status was not associated with significant differences in treatment effects, reporting a null result rather than a pharmacogenomic effect. |
| PGx | Montani_2025 | not_relevant | 2 | 5 | The study reports that clinical efficacy (PVR, 6MWD) and safety were consistent regardless of genotype, indicating no significant pharmacogenomic effect on the drug's response. |
| popPK | Rothman_2025 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics and efficacy of imatinib, with sotatercept mentioned only as a comparator in the discussion without any reported PK parameters. |
| popPK | Sherman_2013 | relevant | 8 | 2 | The paper is a PK study of sotatercept reporting a terminal half-life, but lacks other quantitative disposition parameters like clearance or volume of distribution in the provided text. |
| PGx | Yoshida_2026 | not_relevant | 0 | 0 | The paper is a clinical trial protocol for sotatercept in congenital heart disease and does not report pharmacogenomic effects on PK or PD parameters. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
