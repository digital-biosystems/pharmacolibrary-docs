<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C08E&quot;,&quot;href&quot;:&quot;atc/C08E.md&quot;},{&quot;label&quot;:&quot;lidoflazine&quot;}]"></div>

# lidoflazine

- **generic name:** lidoflazine
- **ATC codes:** `C08EX01`
- **DrugBank:** [DB13766](https://go.drugbank.com/drugs/DB13766) · **PubChem:** not captured
- **molar mass:** 491.627 g/mol (C30H35F2N3O) — DrugBank
- **groups:** approved

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-29 19:01 | 12:07 | 0/0/0 | 0/0/0 | 0/0/0 | 1,714/152 | ollama / qwen3.8:27b-mtp-q8_0 | 0 | 0/0 | 0/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=lidoflazine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| distribution | blood | `SLC29A1` inhibitor | DrugBank actor |
| distribution | liver | `SLC29A1` inhibitor | DrugBank actor |
| metabolism | liver | `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: SCN3A (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 27 matched, 26 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_4 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Katchman_2006.pdf` | Katchman AN et al., Comparative evaluation of HERG currents…, The Journal of pharmacology… (2006) | pd | 5 | [10.1124/jpet.105.093393](https://doi.org/10.1124/jpet.105.093393) | [16278312](https://www.ncbi.nlm.nih.gov/pubmed/16278312) | metadata signals extractable PD data (IC50) |
| `Janis_1984.pdf` | Janis RA et al., Characteristics of the binding of [3H]n…, The Journal of pharmacology… (1984) | pd | 4 | not captured | [6208356](https://www.ncbi.nlm.nih.gov/pubmed/6208356) | metadata signals extractable PD data (IC50) |
| `Pirovano_1990.pdf` | Pirovano IM et al., Inhibition of nucleoside uptake in huma…, European journal of pharmac… (1990) | pd | 4 | [10.1016/0922-4106(90)90040-5](https://doi.org/10.1016/0922-4106(90)90040-5) | [2073930](https://www.ncbi.nlm.nih.gov/pubmed/2073930) | metadata signals extractable PD data (IC50) |
| `Reimão_2016.pdf` | Reimão JQ et al., Investigation of Calcium Channel Blocke…, Evidence-based complementar… (2016) | pd | 4 | [10.1155/2016/1523691](https://doi.org/10.1155/2016/1523691) | [26941821](https://www.ncbi.nlm.nih.gov/pubmed/26941821) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-09-29T19:01:18.042608+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Geer_1993 | irrelevant | 0 | 0 | The study is a mechanistic pharmacology investigation of calcium channel blockade in rat brain slices, not a pharmacokinetic study, and reports no disposition parameters for lidoflazine. |
| popPK | Griffith_1990 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of nucleoside transport inhibition, not a pharmacokinetic study reporting disposition parameters for lidoflazine. |
| popPK | Griffiths_1997 | irrelevant | 0 | 0 | The paper is a molecular biology study on nucleoside transporters where lidoflazine is only mentioned as a comparator for transporter inhibition, with no pharmacokinetic parameters reported. |
| PD | Griffiths_1997 | not_relevant | 0 | 0 | The paper reports molecular cloning and transporter characterization (Km, IC50 for inhibition) but does not report a pharmacodynamic exposure-response or dose-response relationship for lidoflazine in a clinical or physiological context. |
| popPK | Hammond_1991 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of nucleoside transport in tumor cells where lidoflazine derivatives are used only as inhibitors, not as the subject of pharmacokinetic analysis. |
| PD | Hammond_1991 | not_relevant | 0 | 0 | The paper reports in vitro transporter inhibition kinetics (IC50) for a lidoflazine derivative, not a pharmacodynamic exposure-response or dose-response relationship for lidoflazine itself. |
| popPK | Hugtenburg_1989 | irrelevant | 0 | 0 | The study is a mechanistic pharmacological investigation of calcium antagonists on cardiac contractility, not a pharmacokinetic study, and reports no disposition parameters for lidoflazine. |
| popPK | Ijzerman_1989 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on nucleoside transport inhibition and does not report pharmacokinetic parameters for lidoflazine. |
| popPK | Janis_1984 | irrelevant | 0 | 0 | no_text gate: only 173 chars of text extracted (&lt; 400) |
| PD | Janis_1984 | not_relevant | 0 | 0 | The paper focuses on the binding characteristics of nitrendipine and other calcium channel antagonists to rabbit ventricular membranes, with no mention of lidoflazine or any pharmacodynamic/exposure-response analysis for it. |
| popPK | Kang_2012 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiology investigation of ion channel pharmacology, not a pharmacokinetic study, and lidoflazine is used only as a comparator antagonist. |
| popPK | Katchman_2006 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiology investigation of HERG channel blockade and does not report any pharmacokinetic parameters for lidoflazine. |
| popPK | Kenny_1990 | irrelevant | 0 | 0 | The paper is a pharmacological study on fluspirilene's calcium channel effects, and lidoflazine is only mentioned as a comparator in binding assays with no PK parameters reported. |
| PD | Kenny_1990 | not_relevant | 0 | 0 | The paper focuses on fluspirilene; lidoflazine is only mentioned as a comparator in binding assays without specific numeric PD parameters or dose-response curves provided for it. |
| popPK | Nakagawa_1986 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of calcium entry blocking activity in dog coronary artery strips, not a pharmacokinetic study, and reports no disposition parameters for lidoflazine. |
| popPK | Palmer_1993 | irrelevant | 0 | 0 | The study is a pharmacological evaluation of anticonvulsant properties in mice and reports no pharmacokinetic parameters for lidoflazine. |
| PD | Palmer_1993 | not_relevant | 0 | 0 | The paper states that lidoflazine was inactive in all tests and does not provide any numeric PD parameters or dose-response data for it. |
| popPK | Pauwels_1990 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of neuroprotection in neuronal cultures, not a pharmacokinetic study, and reports no disposition parameters for lidoflazine. |
| popPK | Pirovano_1990 | irrelevant | 0 | 0 | no_text gate: only 120 chars of text extracted (&lt; 400) |
| popPK | Plagemann_1987 | irrelevant | 0 | 0 | The study investigates the mechanism of nucleoside transport inhibition in cells (in-vitro) and does not report pharmacokinetic disposition parameters for lidoflazine. |
| popPK | Plagemann_1988 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of nucleoside transport inhibition (IC50 values) and does not report pharmacokinetic disposition parameters for lidoflazine. |
| popPK | Reimão_2016 | irrelevant | 0 | 0 | no_text gate: only 134 chars of text extracted (&lt; 400) |
| PD | Reimão_2016 | not_relevant | 0 | 0 | The paper investigates calcium channel blockers as antiprotozoal agents and their metabolic interference in Leishmania, but does not report a pharmacodynamic or exposure-response relationship for lidoflazine with numeric PD parameters. |
| popPK | Ridley_2004 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiology investigation of HERG channel blockade and does not report any pharmacokinetic parameters for lidoflazine. |
| popPK | Singh_1986 | irrelevant | 0 | 0 | The paper is a review of the mechanism of action of calcium antagonists and does not report any quantitative pharmacokinetic parameters for lidoflazine. |
| PD | Singh_1986 | not_relevant | 1 | 0 | The text is a qualitative review classifying calcium antagonists and mentions lidoflazine only as a Type IV agent without providing any numeric PD parameters or exposure-response data. |
| popPK | Smith_1985 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of calcium channel blockers in cat papillary muscles and does not report any pharmacokinetic parameters for lidoflazine. |
| popPK | Thorn_1996 | irrelevant | 0 | 0 | The paper is a review of adenosine transporters where lidoflazine is mentioned only as a transport inhibitor, with no pharmacokinetic parameters reported. |
| popPK | Zimmerman_1989 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of superoxide anion generation, not a pharmacokinetic study, and reports no disposition parameters for lidoflazine. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
