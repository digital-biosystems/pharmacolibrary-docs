<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A10B&quot;,&quot;href&quot;:&quot;atc/A10B.md&quot;},{&quot;label&quot;:&quot;bexagliflozin&quot;}]"></div>

# bexagliflozin

- **generic name:** bexagliflozin
- **ATC codes:** `A10BK08`
- **DrugBank:** [DB12236](https://go.drugbank.com/drugs/DB12236)
- **groups:** approved, investigational

## About

**Description.** Bexagliflozin is a highly specific and potent sodium-glucose co-transporter 2 (SGLT2) inhibitor.[A256408,A256413,L44758] Similar to other SGLT2 inhibitors, bexagliflozin contains three basic moieties: glucose, two benzene rings and a methylene bridge.[A256413] SGLT2 is responsible for 60% to 90% of renal glucose re-uptake, and unlike other isoforms such as SGLT1, SGLT2 is mainly expressed in the kidney.[A256408] By inhibiting SGLT2, bexagliflozin reduces renal reabsorption of filtered glucose and increases urinary glucose excretion, which reduces blood glucose levels independently of insulin sensitivity.[A256423,L44758] In January 2023, bexagliflozin was approved by the FDA for the treatment of adults with type 2 diabetes. Its use is not recommended in patients with type 1 diabetes since it may increase their risk of diabetic ketoacidosis.[L44758]

**Indication.** Bexagliflozin is indicated as an adjunct to diet and exercise to improve glycemic control in adults with type 2 diabetes mellitus.[L44758]

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-15 16:22 | 7:47 | 0/0/0 | 0/0/0 | 0/0/0 | 55,215/2,111 | ollama / qwen3.8:27b-mtp-q8_0 | 7 | 0/0 | 7/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=bexagliflozin) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` substrate | DrugBank actor |
| absorption | kidney | `ABCB1` substrate | DrugBank actor |
| absorption | liver | `ABCB1` substrate | DrugBank actor |
| absorption | placenta | `ABCB1` substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` substrate | DrugBank actor |
| absorption | stomach | <sub>“…iflozin is taken after a meal or with medications that slow gastric emptying. Between sing…”</sub> | prose |
| metabolism | brain | `CYP2D6` substrate | DrugBank actor |
| metabolism | kidney | `UGT1A9` substrate | DrugBank actor |
| metabolism | liver | `CYP2C8` substrate, `CYP2D6` substrate, `CYP3A4` substrate, `UGT1A1` substrate, `UGT1A9` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate, `UGT1A1` substrate | DrugBank actor |
| excretion | bile duct | <sub>“…Bexagliflozin is mainly eliminated through feces and urine. In healthy subjects given an o…”</sub> | prose |
| excretion | kidney | <sub>“…Bexagliflozin is mainly eliminated through feces and urine. In healthy subjects given an o…”</sub> | prose |
| target | kidney | `SLC5A2` inhibitor | DrugBank actor |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 12 matched, 26 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Patel_2026.pdf` | Patel Y et al., Pharmacokinetics of Bexagliflozin After…, Journal of veterinary pharm… (2026) | popPK | 10 | [10.1111/jvp.70072](https://doi.org/10.1111/jvp.70072) | [41964569](https://pubmed.ncbi.nlm.nih.gov/41964569) | The study reports quantitative pharmacokinetic parameters (CL, V, t1/2, F) for bexagliflozin in cats, with all numeric values explicitly present in the text. |
| `Zhang_2020.pdf` | Zhang W et al., Metabolism and disposition of the SGLT2…, Xenobiotica; the fate of fo… (2020) | pgx | 7 | [10.1080/00498254.2019.1654634](https://doi.org/10.1080/00498254.2019.1654634) | [31432741](https://www.ncbi.nlm.nih.gov/pubmed/31432741) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |

<sub>queue written 2026-09-15T16:21:32.792991+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Anderson_2025 | irrelevant | 0 | 0 | The paper studies the drug AZD1656 (a glucokinase activator) in a mouse model of diabetic cardiomyopathy and does not mention bexagliflozin or report any pharmacokinetic parameters. |
| popPK | Cheng_2025 | irrelevant | 0 | 0 | The paper studies brensocatib (AZD7986) in a stroke model and does not mention bexagliflozin or report any pharmacokinetic parameters. |
| popPK | Cook_2025 | irrelevant | 0 | 0 | The paper is a clinical review of SGLT2 inhibitors in cats that discusses efficacy and safety but does not report quantitative pharmacokinetic parameters (CL, V, ka, etc.) for bexagliflozin. |
| popPK | Davies_2010 | irrelevant | 0 | 0 | The paper is a review of ticagrelor, a different drug, and contains no information on bexagliflozin. |
| popPK | Giruzzi_2024 | irrelevant | 0 | 0 | The evidence contains only the drug name with no pharmacokinetic data, study details, or numeric parameters. |
| popPK | Hadd_2023 | irrelevant | 0 | 0 | The paper is a clinical safety and efficacy trial in cats, not a pharmacokinetic study, and does not report quantitative disposition parameters (CL, V, ka, etc.) for bexagliflozin. |
| popPK | Juricek_1991 | irrelevant | 0 | 0 | The paper studies the mutagenicity of azido sugars in Salmonella and does not involve bexagliflozin or pharmacokinetics. |
| popPK | Li_2024 | irrelevant | 0 | 0 | The paper is a study on pulmonary hypertension and immune mechanisms in mice, with no mention of bexagliflozin or pharmacokinetic parameters. |
| popPK | Li_2026 | irrelevant | 0 | 0 | The paper is a study on aggressive variant prostate cancer (AVPC) and does not mention bexagliflozin or report any pharmacokinetic parameters. |
| popPK | Mahoney_2025 | irrelevant | 0 | 0 | The paper is a synthetic chemistry study on cycloaddition reactions and does not report any pharmacokinetic parameters for bexagliflozin. |
| popPK | Pop_1989 | irrelevant | 0 | 0 | The paper is a clinical oncology study on squamous cell carcinoma treatment outcomes and contains no pharmacokinetic data for bexagliflozin. |
| popPK | Robertson_2018 | irrelevant | 0 | 0 | The paper is a journal club review of studies on nerve sheath tumours and selumetinib, containing no pharmacokinetic data for bexagliflozin. |
| popPK | Sato_2025 | irrelevant | 0 | 0 | The paper is a review of targeted therapies for Neurofibromatosis Type 1 and does not contain any pharmacokinetic data or mention of bexagliflozin. |
| popPK | Siegel_2026 | irrelevant | 0 | 0 | The paper studies the hematologic effects of selumetinib, not the pharmacokinetics of bexagliflozin. |
| popPK | Staedt_1989 | irrelevant | 0 | 0 | The paper concerns hemorheology in cerebrovascular disorders and does not involve bexagliflozin or pharmacokinetic parameters. |
| PD | Susi_2025 | not_relevant | 1 | 0 | The paper is a clinical review that lists pharmacokinetic parameters (half-life, bioavailability) and qualitative clinical effects for bexagliflozin, but it does not report any numeric pharmacodynamic parameters (e.g., Emax, EC50) or exposure-response curves. |
| popPK | Zeng_2025 | irrelevant | 0 | 0 | The paper is a mechanistic study on NSCLC and AZD-9291 resistance, with no mention of bexagliflozin or pharmacokinetic parameters. |
| PGx | Zhang_2020 | not_relevant | 0 | 0 | The paper describes general metabolism and disposition of bexagliflozin in animals and humans but does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| PD | unknown_2023 | not_relevant | 0 | 0 | The provided text is only a title and does not contain the full paper content, so no numeric PD parameters or exposure-response relationships can be extracted. |
| PD | unknown_2025 | not_relevant | 1 | 0 | The text is a title for a review article on noninsulin drugs for type 2 diabetes and does not contain specific pharmacodynamic data, models, or numeric parameters for bexagliflozin. |
| PD | unknown_2025_2 | not_relevant | 0 | 0 | The provided text is a title regarding semaglutide, not bexagliflozin, and contains no pharmacodynamic data or parameters. |
| PD | unknown_2025_3 | not_relevant | 0 | 0 | The text is a title for a comparison chart of SGLT2 inhibitors and contains no data, analysis, or numeric parameters for bexagliflozin. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
