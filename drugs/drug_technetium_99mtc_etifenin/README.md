<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V09D&quot;,&quot;href&quot;:&quot;atc/V09D.md&quot;},{&quot;label&quot;:&quot;technetium (99mTc) etifenin&quot;}]"></div>

# technetium (99mTc) etifenin

- **generic name:** technetium (99mTc) etifenin
- **ATC codes:** `V09DA02`
- **DrugBank:** [DB13183](https://go.drugbank.com/drugs/DB13183) · **PubChem:** not captured
- **groups:** investigational

## About

Technetium (99mTc) etifenin is a diagnostic radiopharmaceutical used for imaging of the liver and reticuloendothelial system. It is listed as investigational and is not an established approved medicine.

<small>⚠️ **Unverified** — written by `glm-5.3-flash` from general knowledge (no Wikidata entry found) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 19:23 | 1:28 | 0/0/0 | 0/0/0 | 0/0/0 | 9,538/4,330 | openai / gpt-6-luna | 0 | 0/0 | 0/0 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 14 matched, 10 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Bláha_1993.pdf` | Bláha V et al., Clearance and distribution parameters o…, Nuclear medicine and biology (1993) | popPK | 9 | [10.1016/0969-8051(93)90140-p](https://doi.org/10.1016/0969-8051(93)90140-p) | [8461884](https://pubmed.ncbi.nlm.nih.gov/8461884) | The study analyzes 99mTc-EHIDA clearance and distribution half-times in patients, but no numeric parameter values are present in the provided evidence. |
| `Coenegracht_1983.pdf` | Coenegracht JM et al., The influence of bilirubin, alcohol and…, European journal of nuclear… (1983) | popPK | 9 | [10.1007/BF00252882](https://doi.org/10.1007/BF00252882) | [6861781](https://pubmed.ncbi.nlm.nih.gov/6861781) | Human EHIDA uptake and excretion kinetics are modeled, but no numeric parameter values are provided. |
| `Kurihara_1990.pdf` | Kurihara N, [Hepatic mean transit time of 99mTc-EHI…, Nihon Shokakibyo Gakkai zas… (1990) | popPK | 8 | not captured | [2329733](https://pubmed.ncbi.nlm.nih.gov/2329733) | Human hepatic transit and blood-clearance measures are reported for 99mTc-EHIDA, but their numeric values are not provided. |

<sub>queue written 2026-10-07T19:23:47.431877+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Ansari_1989 | irrelevant | 1 | 0 | Human hepatobiliary imaging study with qualitative tracer disposition but no quantitative pharmacokinetic parameter values. |
| popPK | Bláha_1993 | relevant | 9 | 0 | The study analyzes 99mTc-EHIDA clearance and distribution half-times in patients, but no numeric parameter values are present in the provided evidence. |
| popPK | Cheng_2008 | irrelevant | 0 | 0 | The study models Tc-99m EHIDA, not technetium_99mtc_etifenin, and provides no target-drug values. |
| popPK | Coenegracht_1983 | relevant | 9 | 0 | Human EHIDA uptake and excretion kinetics are modeled, but no numeric parameter values are provided. |
| popPK | Du_2008 | irrelevant | 1 | 0 | Human imaging study reports liver-function indices, not quantitative pharmacokinetic disposition parameters. |
| popPK | Kurihara_1990 | relevant | 8 | 1 | Human hepatic transit and blood-clearance measures are reported for 99mTc-EHIDA, but their numeric values are not provided. |
| popPK | Mackie_1986 | irrelevant | 1 | 1 | 99Tcm-EHIDA is used as a scintigraphic tracer, and the reported gastric evacuation half-life is not a drug disposition parameter. |
| popPK | Owunwanne_1990 | irrelevant | 1 | 0 | Tc-99m EHIDA is used as a diagnostic agent, and no numeric pharmacokinetic parameter values are reported. |
| popPK | Zhou_1987 | irrelevant | 0 | 0 | 99mTc-etifenin is only a comparator, and its disposition is described qualitatively without numeric parameters. |
| popPK | Zimácek_1990 | irrelevant | 2 | 5 | The diagnostic study reports numeric blood-clearance half-times and retention, but no qualifying disposition model or CL/V parameters. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
