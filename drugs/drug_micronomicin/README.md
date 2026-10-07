<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;S01A&quot;,&quot;href&quot;:&quot;atc/S01A.md&quot;},{&quot;label&quot;:&quot;micronomicin&quot;}]"></div>

# micronomicin

- **generic name:** micronomicin
- **ATC codes:** `S01AA22`
- **DrugBank:** [DB13274](https://go.drugbank.com/drugs/DB13274) · **PubChem:** not captured
- **molar mass:** 463.576 g/mol (C20H41N5O7) — DrugBank
- **groups:** approved

## About

Micronomicin is an antibiotic related to gentamicin, used to treat eye infections. It is classified as an approved antibiotic for ophthalmological use, though it does not appear to be authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q6839784](https://www.wikidata.org/wiki/Q6839784) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| micronomicin | parent | 463.576 | C20H41N5O7 | DrugBank | — | Yamasaku_1983 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 18:36 | 0:33 | 0/1/0 | 0/0/0 | 0/0/0 | 36,128/1,684 | einfracz / qwen3.8-27b | 2 | 2/0 | 1/1 | 1 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Yamasaku_1983_reference](drugs/drug_micronomicin/Micronomicin_Yamasaku1983_reference.md) | — | 1-compartment (no model) | 0 | Yamasaku F, [Pharmacokinetic studies of micronomici…, The Japanese journal of ant… (1983) | — |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 13 matched, 13 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_5 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Inoue_1983.pdf` | Inoue A et al., [Pharmacokinetic studies on micronomici…, The Japanese journal of ant… (1983) | popPK | 10 | not captured | [6674539](https://pubmed.ncbi.nlm.nih.gov/6674539) | The paper describes a compartmental PK model for micronomicin in dogs, but the specific numeric values for the requested parameters (T1/2, Kel, Vd, Cl) are summarized in text as "not differentiated" without listing the actual numbers, which are likely in tables not provided in the evidence. |
| `Kurimoto_1983.pdf` | Kurimoto T et al., [Pharmacokinetic studies on micronomici…, The Japanese journal of ant… (1983) | popPK | 10 | not captured | [6674538](https://pubmed.ncbi.nlm.nih.gov/6674538) | The study reports pharmacokinetic modeling for micronomicin in rats, but specific numeric parameter values (CL, V, ka) are not listed in the provided abstract text. |
| `Watanabe_1983.pdf` | Watanabe M et al., [Clinical studies of intravenous drip i…, The Japanese journal of ant… (1983) | popPK | 10 | not captured | [6674542](https://pubmed.ncbi.nlm.nih.gov/6674542) | The abstract provides specific quantitative pharmacokinetic parameters (Cmax, T1/2, V1, Kel) for micronomicin derived from a two-compartment model in human volunteers. |
| `Watanabe_1985.pdf` | Watanabe M et al., [Clinical studies of intravenous drip i…, The Japanese journal of ant… (1985) | popPK | 10 | not captured | [4032720](https://pubmed.ncbi.nlm.nih.gov/4032720) | The study reports quantitative PK parameters including Cmax, half-life range, and an elimination constant correlation formula for micronomicin in humans. |
| `Yamasaku_1983.pdf` | Yamasaku F, [Pharmacokinetic studies of micronomici…, The Japanese journal of ant… (1983) | popPK | 10 | not captured | [6674541](https://pubmed.ncbi.nlm.nih.gov/6674541) | The study reports quantitative pharmacokinetic parameters for micronomicin in humans, specifically including half-lives (T1/2 beta 1.43-2.02 hours) and concentration data, although full clearance and volume parameters are not explicitly listed in the provided text. |

<sub>queue written 2026-10-07T18:35:41.408648+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Fukuda_2002 | irrelevant | 2 | 0 | Micronomicin is a comparator drug for which AQCmax could not be calculated, and the text explicitly states that its concentration was below the detection limit/quantification limit, so no quantitative PK parameters (CL, V, t1/2) are reported for it. |
| popPK | Fukuda_2002_2 | irrelevant | 2 | 0 | Micronomicin is one of six comparator ophthalmic agents in a rabbit study, and no quantitative PK parameters (CL, V, ka) were calculable or reported for it. |
| popPK | Inoue_1983 | relevant | 10 | 2 | The paper describes a compartmental PK model for micronomicin in dogs, but the specific numeric values for the requested parameters (T1/2, Kel, Vd, Cl) are summarized in text as "not differentiated" without listing the actual numbers, which are likely in tables not provided in the evidence. |
| popPK | Kurimoto_1983 | relevant | 10 | 3 | The study reports pharmacokinetic modeling for micronomicin in rats, but specific numeric parameter values (CL, V, ka) are not listed in the provided abstract text. |
| popPK | Watanabe_1986 | irrelevant | 0 | 0 | The provided evidence contains only software metadata (GROBID) and no scientific content regarding micronomicin or any other drug. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 18:35 UTC</sub>
