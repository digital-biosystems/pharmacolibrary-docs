<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C03D&quot;,&quot;href&quot;:&quot;atc/C03D.md&quot;},{&quot;label&quot;:&quot;eplerenone&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Eplerenone_Oishi2017_reference&quot;,&quot;label&quot;:&quot;Oishi_2017_reference&quot;,&quot;href&quot;:&quot;drugs/drug_eplerenone/Eplerenone_Oishi2017_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# eplerenone

- **generic name:** eplerenone
- **ATC codes:** `C03DA04`
- **DrugBank:** [DB00700](https://go.drugbank.com/drugs/DB00700) · **PubChem:** [CID 443872](https://pubchem.ncbi.nlm.nih.gov/compound/443872)
- **molar mass:** 414.4914 g/mol (C24H30O6) — DrugBank
- **groups:** approved, investigational

## About

**Description.** Eplerenone, an aldosterone receptor antagonist similar to spironolactone, has been shown to produce sustained increases in plasma renin and serum aldosterone, consistent with inhibition of the negative regulatory feedback of aldosterone on renin secretion. The resulting increased plasma renin activity and aldosterone circulating levels do not overcome the effects of eplerenone. Eplerenone selectively binds to recombinant human mineralocorticoid receptors relative to its binding to recombinant human glucocorticoid, progesterone and androgen receptors.

**Indication.** For improvement of survival of stable patients with left ventricular systolic dysfunction (ejection fraction <40%) and clinical evidence of congestive heart failure after an acute myocardial infarction.

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| eplerenone | parent | 414.491 | C24H30O6 | DrugBank | [443872](https://pubchem.ncbi.nlm.nih.gov/compound/443872) | Oishi_2017 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-28 11:17 | 2:27 | 0/0/1 | 0/0/0 | 0/0/0 | 2,862/2,948 | ollama / qwen3.8:27b-mtp-q8_0 | 2 | 2/0 | 2/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.333). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>route_to: `human_review`</sub> | [Oishi_2017_reference](drugs/drug_eplerenone/Eplerenone_Oishi2017_reference.md) | — | 1-compartment (no model) | 1 | Oishi M et al., Population Pharmacokinetics of Eplereno…, Journal of clinical pharmac… (2017) | [10.1002/jcph.861](https://doi.org/10.1002/jcph.861) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=eplerenone) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | kidney | `CYP3A5` substrate | DrugBank actor |
| metabolism | liver | `CYP3A4` substrate, `CYP3A5` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate, `CYP3A5` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: CYP11B2 (inhibitor), NR3C2 (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 11 matched, 11 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 1  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Mori_2010.pdf` | Mori Y et al., A population approach to eplerenone pha…, Drug metabolism and pharmac… (2010) | popPK | 10 | [10.2133/dmpk.dmpk-09-rg-024](https://doi.org/10.2133/dmpk.dmpk-09-rg-024) | [20962434](https://pubmed.ncbi.nlm.nih.gov/20962434) | The paper describes a population PK study for eplerenone, but the provided evidence contains only the abstract and lacks specific numeric parameter values (CL, V, etc.). |
| `Oishi_2017.pdf` | Oishi M et al., Population Pharmacokinetics of Eplereno…, Journal of clinical pharmac… (2017) | popPK | 10 | [10.1002/jcph.861](https://doi.org/10.1002/jcph.861) | [28032902](https://pubmed.ncbi.nlm.nih.gov/28032902) | The paper is a population PK study for eplerenone and explicitly reports the population mean apparent oral clearance (CL/F) of 5.31 L/h in the text. |

<sub>queue written 2026-09-28T11:14:53.843360+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Almeida_2011 | irrelevant | 2 | 0 | The study is a bioequivalence trial reporting only AUC and Cmax ratios, lacking the specific quantitative disposition parameters (CL, V, ka, t1/2) required for population PK extraction. |
| popPK | Ferreira_2020 | irrelevant | 0 | 0 | The paper is a clinical outcome analysis of the EPHESUS trial focusing on loop diuretic dose reductions and mortality, containing no pharmacokinetic parameters (CL, V, ka, etc.) for eplerenone. |
| popPK | Kobayashi_2023 | irrelevant | 0 | 0 | The paper is a clinical efficacy trial (EARLIER) reporting clinical outcomes and echocardiographic changes, not a pharmacokinetic study with disposition parameters. |
| popPK | Mori_2010 | relevant | 10 | 0 | The paper describes a population PK study for eplerenone, but the provided evidence contains only the abstract and lacks specific numeric parameter values (CL, V, etc.). |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-09-28 10:19 UTC</sub>
