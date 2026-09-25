<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A03A&quot;,&quot;href&quot;:&quot;atc/A03A.md&quot;},{&quot;label&quot;:&quot;Prifinium&quot;}]"></div>

# Prifinium

- **generic name:** Prifinium
- **ATC codes:** `A03AB18`
- **DrugBank:** [DB13254](https://go.drugbank.com/drugs/DB13254)
- **groups:** experimental

## About

**Description.** Prifinium is an antimuscarinic agent with antispasmodic and antiemetic properties. It may be useful for the treatment of irritable bowel syndrome [A175027].

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-15 21:45 | 4:22 | 0/0/0 | 0/0/0 | 0/0/0 | 20,532/3,916 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 1/0 | 1/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=prifinium) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: CHRM5 (modulator).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 5 matched, 25 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Noguchi_1983.pdf` | Noguchi H et al., Pharmacokinetics of prifinium bromide i…, International journal of cl… (1983) | popPK | 10 | not captured | [6134685](https://pubmed.ncbi.nlm.nih.gov/6134685) | The paper reports quantitative PK parameters (CL, Vss, t1/2) for prifinium in healthy volunteers with all numeric values explicitly present in the text. |

<sub>queue written 2026-09-15T21:45:39.537065+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bettini_1985 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of coronary vessel contractions where prifinium is used only as a diagnostic antagonist, with no pharmacokinetic parameters reported. |
| popPK | Bettini_1986 | irrelevant | 0 | 0 | The study is a pharmacological investigation of carnitine's effects on rat stomach preparations where prifinium is used only as a comparator antagonist, with no pharmacokinetic parameters reported. |
| popPK | Demol_1989 | irrelevant | 0 | 0 | The paper is a review of gastrointestinal motility disorders that mentions prifinium only as an example of an anticholinergic drug without reporting any pharmacokinetic parameters. |
| popPK | Dong_1995 | irrelevant | 0 | 0 | The paper reports in-vitro ligand binding affinities for muscarinic receptors, not pharmacokinetic disposition parameters for prifinium. |
| popPK | Dureng_1977 | irrelevant | 0 | 0 | The study is an in-vitro molecular pharmacology investigation of receptor affinity (pA2) and does not report pharmacokinetic disposition parameters for prifinium. |
| popPK | Fieni_1997 | irrelevant | 0 | 0 | Prifinium is used only as a premedication agent in a clinical protocol for pregnancy termination, and no pharmacokinetic parameters for prifinium are reported. |
| popPK | Frasson_1978 | irrelevant | 0 | 0 | The paper is a clinical study on the antispastic efficacy of prifinium in esophageal disorders and does not report any pharmacokinetic parameters. |
| popPK | Hachet_1986 | irrelevant | 0 | 0 | The paper describes a method for measuring gut motility and lists prifinium as a test drug, but it does not report any pharmacokinetic parameters. |
| popPK | Ishikawa_1993 | irrelevant | 0 | 0 | The paper is a clinical case report on the treatment of organophosphorus intoxication with prifinium and does not report any pharmacokinetic parameters. |
| PD | Ishikawa_1993 | not_relevant | 1 | 0 | The text is a qualitative clinical summary describing the efficacy of prifinium bromide in treating chronic organophosphorus intoxication but provides no numeric PD parameters, dose-response data, or concentration-effect analysis. |
| PD | Ishikawa_1996 | not_relevant | 0 | 0 | The paper is an epidemiological and pathological report on organophosphorus toxicity; Prifinium is mentioned only as a treatment antidote without any dose-response or exposure-response analysis. |
| popPK | Ishikawa_2016 | irrelevant | 0 | 0 | The study is a mechanistic investigation of sperm migration in mice where prifinium is used as a pharmacological tool to suppress contractions, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Kubo_1981 | irrelevant | 0 | 0 | The study is a pharmacological investigation of ganglion blocking activity in animals, and prifinium is used only as a comparator agent with no pharmacokinetic parameters reported. |
| PD | Kubo_1981 | not_relevant | 1 | 0 | The paper focuses on the pharmacological profile of HSR-902, mentioning prifinium only for qualitative potency ranking without providing numeric PD parameters or extractable dose-response data for prifinium. |
| popPK | Kuriyama_2021 | irrelevant | 0 | 0 | The paper is a synthetic chemistry study describing the synthesis of prifinium bromide and contains no pharmacokinetic data or disposition parameters. |
| popPK | Lacroix_1992 | irrelevant | 0 | 0 | The study focuses on the physiological effects of prifinium on respiratory sinus arrhythmia and does not report any pharmacokinetic parameters such as clearance, volume, or half-life. |
| popPK | Moriyoshi_1999 | irrelevant | 0 | 0 | The study is a pharmacological investigation of parturition induction where prifinium is used as a pretreatment agent, and it does not report original quantitative pharmacokinetic parameters (CL, V, etc.) for prifinium. |
| popPK | Sasaki_1985 | irrelevant | 0 | 0 | The paper is a clinical efficacy trial for irritable bowel syndrome and does not report any pharmacokinetic parameters for prifinium. |
| popPK | Subissi_1983 | irrelevant | 0 | 0 | The study is a pharmacological investigation of spasmolytic effects on intestinal contraction in rats, not a pharmacokinetic study, and reports no disposition parameters for prifinium. |
| popPK | Tamura_1986 | irrelevant | 0 | 0 | The paper is a clinical observation of a physiological phenomenon (magician's forceps) in exotropia patients and does not report any pharmacokinetic parameters for prifinium. |
| popPK | Terai_1991 | irrelevant | 0 | 0 | The study focuses on pharmacodynamic effects (bladder contractions) and mechanisms of action, not pharmacokinetic disposition parameters. |
| popPK | Tohei_1975 | irrelevant | 0 | 0 | The study is a roentgenographic evaluation of gastrointestinal effects (gastric tonus and form) and does not report any pharmacokinetic parameters for prifinium. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
