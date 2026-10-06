<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C01D&quot;,&quot;href&quot;:&quot;atc/C01D.md&quot;},{&quot;label&quot;:&quot;hexobendine&quot;}]"></div>

# hexobendine

- **generic name:** hexobendine
- **ATC codes:** `C01DX06`
- **DrugBank:** [DB13265](https://go.drugbank.com/drugs/DB13265) · **PubChem:** not captured
- **molar mass:** 592.686 g/mol (C30H44N2O10) — DrugBank
- **groups:** approved

## About

Hexobendine is a vasodilator used in cardiac therapy, acting on blood vessels to treat heart-related conditions. It is an approved drug, though it appears to be a niche cardiac vasodilator rather than a widely used medicine, and it is not authorised by the European Medicines Agency.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q12745373](https://www.wikidata.org/wiki/Q12745373) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 08:49 | 1:50 | 0/0/1 | 0/0/0 | 0/0/0 | 45,101/1,293 | ollama / qwen3.8:27b-mtp-q8_0 | 4 | 4/0 | 4/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">None</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span><br><sub>STALE — current validate: not captured</sub> | [Kolassa_1975_rats](drugs/drug_hexobendine/Hexobendine_Kolassa1975_rats.md) | — | — (no model) | 0 | Kolassa N et al., [Studies on the pharmacokinetics of hex…, Arzneimittel-Forschung (1975) | — |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 32 matched, 29 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 1
- **scholar-agent fallback query used:** not captured

## Full text wanted

_4 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Kolassa_1975.pdf` | Kolassa N et al., [Studies on the pharmacokinetics of hex…, Arzneimittel-Forschung (1975) | popPK | 9 | not captured | [1242664](https://pubmed.ncbi.nlm.nih.gov/1242664) | The study reports quantitative pharmacokinetic parameters (half-lives, serum concentrations, tissue/serum ratios) for hexobendine in rats. |
| `Wiemer_1982.pdf` | Wiemer G et al., Energy-dependent extrusion of cyclic 3'…, Naunyn-Schmiedeberg's archi… (1982) | pd | 5 | [10.1007/BF00498507](https://doi.org/10.1007/BF00498507) | [6300698](https://www.ncbi.nlm.nih.gov/pubmed/6300698) | metadata signals extractable PD data (EC50) |
| `Bender_1986.pdf` | Bender AS et al., Similarities of adenosine uptake system…, Neurochemical research (1986) | pd | 4 | [10.1007/BF00965770](https://doi.org/10.1007/BF00965770) | [2891057](https://www.ncbi.nlm.nih.gov/pubmed/2891057) | metadata signals extractable PD data (IC50) |
| `Striessnig_1985.pdf` | Striessnig J et al., Human red-blood-cell Ca2+-antagonist bi…, European journal of biochem… (1985) | pd | 4 | [10.1111/j.1432-1033.1985.tb08989.x](https://doi.org/10.1111/j.1432-1033.1985.tb08989.x) | [2990927](https://www.ncbi.nlm.nih.gov/pubmed/2990927) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-10-06T08:49:01.547337+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bender_1981 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of adenosine uptake in rat synaptosomes where hexobendine is used only as an inhibitor/comparator, not as the subject drug for PK analysis. |
| PD | Bender_1986 | not_relevant | 0 | 0 | The paper discusses adenosine uptake systems in astrocytes and neurons and does not mention hexobendine or report any pharmacodynamic or exposure-response data for it. |
| popPK | Bester_1971 | irrelevant | 0 | 0 | no_text gate: only 92 chars of text extracted (&lt; 400) |
| popPK | Deckert_1987 | irrelevant | 0 | 0 | The study is an in-vitro receptor binding assay using hexobendine as a competitive inhibitor, not a pharmacokinetic study of hexobendine disposition. |
| PD | Deckert_1987 | not_relevant | 3 | 4 | The paper reports in vitro binding affinity (Ki) for hexobendine, which is a pharmacological parameter but not a pharmacodynamic (exposure-response) relationship in the context of drug effect modeling. |
| popPK | Hayashi_1978 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of cholinergic nerve function in guinea pig ileum, not a pharmacokinetic study of hexobendine. |
| popPK | IJzerman_1990 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of nucleoside transporter binding affinity and ionization, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Iwata_1978 | irrelevant | 0 | 0 | The study investigates the mechanism of action (adenosine uptake and enzyme inhibition) and myocardial metabolite levels, not pharmacokinetic disposition parameters like clearance or volume. |
| PD | Jiménez_2000 | not_relevant | 1 | 1 | The paper reports a qualitative ranking of inhibitors (including hexobendine) for adenosine uptake but provides no numeric IC50 or dose-response parameters for hexobendine. |
| popPK | Kolassa_1975_2 | irrelevant | 2 | 0 | The study discusses elimination and methodological shortcomings of radioactive tracers but does not report quantitative compartmental PK parameters (CL, V, t1/2) for hexobendine. |
| popPK | Kolassa_1977 | irrelevant | 0 | 0 | no_text gate: only 116 chars of text extracted (&lt; 400) |
| popPK | Kraupp_1969 | irrelevant | 0 | 0 | no_text gate: only 164 chars of text extracted (&lt; 400) |
| popPK | Królikowska-Prasał_1979 | irrelevant | 0 | 0 | The study is a histochemical investigation of enzyme activity in rat aortas, not a pharmacokinetic study, and reports no disposition parameters. |
| popPK | Kukovetz_1976 | irrelevant | 0 | 0 | The study investigates the pharmacological properties of fendiline in isolated tissues, with hexobendine mentioned only as a comparator agent without any pharmacokinetic parameter reporting. |
| popPK | Maj_1980 | irrelevant | 0 | 0 | The study focuses on the pharmacological properties of Craviten (M-71), using hexobendine only as a comparator drug without reporting any pharmacokinetic parameters for it. |
| popPK | McInnes_1969 | irrelevant | 0 | 0 | The study reports hemodynamic and functional effects (blood flow, contractility) but contains no pharmacokinetic parameters (CL, V, ka, t1/2). |
| popPK | Meghji_1985 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of adenosine transport in neonatal rat heart cells where hexobendine is used as a tool compound (transport inhibitor), not as the subject of pharmacokinetic analysis. |
| popPK | Meghji_1988 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of adenosine transport in chick heart cells where hexobendine is used only as a transport inhibitor, not as the subject of pharmacokinetic analysis. |
| popPK | Meyer_1970 | irrelevant | 0 | 0 | no_text gate: only 87 chars of text extracted (&lt; 400) |
| popPK | Meyer_1971 | irrelevant | 0 | 0 | no_text gate: only 161 chars of text extracted (&lt; 400) |
| popPK | Rothaul_1981 | irrelevant | 0 | 0 | The study is a mechanistic investigation of coronary vasodilation in guinea-pig hearts using hexobendine as a pharmacological tool, not a pharmacokinetic study reporting disposition parameters. |
| PD | Schmitt_1967 | not_relevant | 0 | 0 | The provided text is only a title and lacks the full content required to verify the presence of numeric PD parameters or an extractable exposure-response relationship. |
| popPK | Shibata_1977 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of hexobendine's effect on calcium influx and contractility in isolated rabbit tissues, reporting no pharmacokinetic parameters. |
| PD | Striessnig_1985 | not_relevant | 0 | 0 | The paper focuses on the characterization of Ca2+-antagonist binding sites on red blood cells and does not report pharmacodynamic or exposure-response relationships for hexobendine. |
| popPK | Wiemer_1982 | irrelevant | 0 | 0 | no_text gate: only 172 chars of text extracted (&lt; 400) |
| PD | Wiemer_1982 | not_relevant | 0 | 0 | The paper focuses on the mechanism of cAMP extrusion in rat erythrocytes and does not report any pharmacodynamic or exposure-response data for hexobendine. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-06 08:49 UTC</sub>
