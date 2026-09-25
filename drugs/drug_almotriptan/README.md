<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02C&quot;,&quot;href&quot;:&quot;atc/N02C.md&quot;},{&quot;label&quot;:&quot;almotriptan&quot;}]"></div>

# almotriptan

- **generic name:** almotriptan
- **ATC codes:** `N02CC05`
- **DrugBank:** [DB00918](https://go.drugbank.com/drugs/DB00918)
- **groups:** approved

## About

**Description.** Almotriptan is a triptan drug for the treatment of migraine headaches. Almotriptan is in a class of medications called selective serotonin receptor agonists. It works by narrowing blood vessels in the brain, stopping pain signals from being sent to the brain, and stopping the release of certain natural substances that cause pain, nausea, and other symptoms of migraine. Almotriptan does not prevent migraine attacks.

**Indication.** For the treatment of acute migraine headache in adults

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-21 03:55 | 6:16 | 0/0/0 | 0/0/0 | 0/0/0 | 36,431/2,372 | ollama / qwen3.8:27b-mtp-q8_0 | 3 | 2/1 | 2/1 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=almotriptan) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | brain | `CYP2D6` substrate, `MAOA` substrate | DrugBank actor |
| metabolism | liver | `CYP2C19` substrate, `CYP2C8` substrate, `CYP2D6` substrate, `CYP2E1` substrate, `CYP3A4` substrate, `FMO3` substrate, `MAOA` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate, `MAOA` substrate | DrugBank actor |
| excretion | bile duct | <sub>“…Approximately 13% of the administered dose is excreted via feces, both unchanged and metab…”</sub> | prose |
| excretion | kidney | <sub>“…Almotriptan is eliminated primarily by renal excretion (about 75% of the oral dose), with…”</sub> | prose |

<sub>Actors without a tissue in the table: HTR1B (target), HTR1D (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 25 matched, 25 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_5 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Jansat_2002.pdf` | Jansat JM et al., Absolute bioavailability, pharmacokinet…, Journal of clinical pharmac… (2002) | popPK | 10 | [10.1177/0091270002042012006](https://doi.org/10.1177/0091270002042012006) | [12463724](https://pubmed.ncbi.nlm.nih.gov/12463724) | The study is a primary PK investigation of almotriptan, but the evidence text only provides qualitative descriptions and ranges (e.g., t1/2 3.4-3.6 h) without specific numeric values for clearance, volume, or rate constants. |
| `Nirogi_2013.pdf` | Nirogi R et al., LC-MS/MS method for the quantification…, Journal of pharmaceutical a… (2013) | pd | 5 | [10.1016/j.jpba.2013.04.008](https://doi.org/10.1016/j.jpba.2013.04.008) | [23666253](https://www.ncbi.nlm.nih.gov/pubmed/23666253) | metadata signals extractable PD data (PK/PD) |
| `Fleishaker_2000.pdf` | Fleishaker JC et al., Pharmacokinetic interaction between ver…, Clinical pharmacology and t… (2000) | pgx | 7 | [10.1067/mcp.2000.106292](https://doi.org/10.1067/mcp.2000.106292) | [10824628](https://www.ncbi.nlm.nih.gov/pubmed/10824628) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Fleishaker_2003.pdf` | Fleishaker JC et al., Interaction between ketoconazole and al…, Journal of clinical pharmac… (2003) | pgx | 7 | [10.1177/0091270003252242](https://doi.org/10.1177/0091270003252242) | [12723463](https://www.ncbi.nlm.nih.gov/pubmed/12723463) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `McEnroe_2005.pdf` | McEnroe JD et al., Clinical pharmacokinetics of almotripta…, Clinical pharmacokinetics (2005) | pgx | 7 | [10.2165/00003088-200544030-00002](https://doi.org/10.2165/00003088-200544030-00002) | [15762767](https://www.ncbi.nlm.nih.gov/pubmed/15762767) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |

<sub>queue written 2026-09-21T03:52:36.845408+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Belvis_2014 | irrelevant | 0 | 0 | The paper is a narrative review discussing migraine treatment strategies and does not report original quantitative pharmacokinetic parameters for almotriptan. |
| PD | Belvis_2014 | not_relevant | 1 | 0 | The text is a general review discussing the clinical use and profiles of triptans, including almotriptan, but does not present any specific pharmacokinetic or pharmacodynamic data, models, or numeric parameters. |
| popPK | Belvís_2009 | irrelevant | 0 | 0 | The paper is a review discussing triptan selection and does not report original quantitative pharmacokinetic parameters for almotriptan. |
| PD | Belvís_2009 | not_relevant | 1 | 0 | The text is a qualitative review of triptan selection and does not report any specific numeric pharmacodynamic parameters or exposure-response data for almotriptan. |
| popPK | Bou_2000 | irrelevant | 0 | 0 | The paper is a pharmacological characterization study focusing on receptor affinity and vasoconstriction, containing no pharmacokinetic disposition parameters. |
| popPK | Bou_2001 | irrelevant | 0 | 0 | The study is an in-vitro pharmacodynamic assessment of vascular contractility, not a pharmacokinetic study reporting disposition parameters. |
| PGx | Buzzi_2008 | not_relevant | 2 | 0 | The paper is a review discussing the potential of pharmacogenetics for triptans and almotriptan's metabolic pathways, but it does not report specific experimental data or fitted effect sizes linking gene variants to PK/PD parameters. |
| popPK | Chryssafidis_2022 | irrelevant | 2 | 0 | The paper is a methodological study using almotriptan as a test case for model fitting, and the specific numeric PK parameters for almotriptan are not provided in the text, only references to figures and notes that parameters cannot be determined reliably. |
| popPK | Dowson_2004 | irrelevant | 1 | 0 | The paper is a clinical review of efficacy and tolerability that mentions pharmacokinetic properties qualitatively but provides no quantitative disposition parameters. |
| PD | Dowson_2004 | not_relevant | 2 | 1 | The text is a qualitative review summarizing clinical efficacy and PK properties without providing specific numeric PD parameters (e.g., EC50, Emax) or concentration-effect curves. |
| PGx | Fleishaker_2000 | not_relevant | 0 | 0 | The paper reports a drug-drug interaction (verapamil) affecting almotriptan PK, not a pharmacogenomic effect based on gene variants. |
| PGx | Fleishaker_2003 | not_relevant | 0 | 0 | The study examines a drug-drug interaction (ketoconazole) rather than a pharmacogenomic effect (gene variant/genotype). |
| popPK | Jansat_2002 | relevant | 10 | 2 | The study is a primary PK investigation of almotriptan, but the evidence text only provides qualitative descriptions and ranges (e.g., t1/2 3.4-3.6 h) without specific numeric values for clearance, volume, or rate constants. |
| popPK | McEnroe_2005 | irrelevant | 0 | 0 | no_text gate: only 112 chars of text extracted (&lt; 400) |
| PD | McEnroe_2005 | not_relevant | 0 | 0 | The paper focuses on the clinical pharmacokinetics of almotriptan and does not report any pharmacodynamic, exposure-response, or dose-response analysis with numeric PD parameters. |
| PGx | McEnroe_2005 | not_relevant | 0 | 0 | The paper describes the general clinical pharmacokinetics of almotriptan but does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| popPK | Negro_2013 | irrelevant | 2 | 0 | The paper is a review article discussing pharmacokinetic aspects of almotriptan but does not present original quantitative disposition parameters or numeric values in the provided evidence. |
| PD | Negro_2013 | not_relevant | 2 | 0 | The text is a review summary that qualitatively discusses pharmacodynamic aspects but does not provide specific numeric PD parameters or concentration-effect data. |
| popPK | Nirogi_2013 | irrelevant | 0 | 0 | no_text gate: only 123 chars of text extracted (&lt; 400) |
| PD | Nirogi_2013 | not_relevant | 0 | 0 | The paper describes an LC-MS/MS method and a microdialysis study for quantifying almotriptan, but does not report any pharmacodynamic or exposure-response analysis. |
| popPK | Ou_2024 | irrelevant | 0 | 0 | The paper is about optical imaging and tissue transparency in mice, not pharmacokinetics of almotriptan. |
| PD | Ou_2024 | not_relevant | 0 | 0 | The paper discusses optical physics and tissue clearing in mice, containing no pharmacological data, PK/PD analysis, or mention of almotriptan. |
| PGx | Salva_2003 | not_relevant | 2 | 0 | The paper identifies metabolic enzymes (CYP3A4, CYP2D6, MAO-A) but does not report specific pharmacogenomic effects of gene variants on PK/PD parameters, only stating that no dose changes are required. |
| popPK | Tfelt-Hansen_2000 | irrelevant | 1 | 0 | The paper is a comparative review of triptans that discusses efficacy and general pharmacokinetic properties (like bioavailability and half-life) but does not report specific quantitative disposition parameters (CL, V, Q, ka) for almotriptan. |
| PD | Tfelt-Hansen_2000 | not_relevant | 2 | 1 | The text is a comparative review that lists therapeutic gains (efficacy outcomes) for various triptans, including almotriptan, but does not report any pharmacodynamic parameters (e.g., Emax, EC50) or exposure-response/dose-response curves. |
| popPK | Tfelt-Hansen_2011 | irrelevant | 1 | 0 | The paper is a clinical review of dose-response and tolerability, not a pharmacokinetic study, and it does not report quantitative disposition parameters (CL, V, ka, etc.) for almotriptan. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
