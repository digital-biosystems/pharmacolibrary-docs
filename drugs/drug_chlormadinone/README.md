<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;G03A&quot;,&quot;href&quot;:&quot;atc/G03A.md&quot;},{&quot;label&quot;:&quot;chlormadinone&quot;}]"></div>

# chlormadinone

- **generic name:** chlormadinone
- **ATC codes:** `G03AA15`, `G03AB07`, `G03DB06`, `G03FB03`
- **DrugBank:** [DB13528](https://go.drugbank.com/drugs/DB13528) · **PubChem:** not captured
- **molar mass:** 362.89 g/mol (C21H27ClO3) — DrugBank
- **groups:** investigational

## About

Chlormadinone is a progestogen steroid that has been used in hormonal contraceptives and other progestogen–estrogen combination preparations. It is currently considered investigational and is not an approved medicine in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q905012](https://www.wikidata.org/wiki/Q905012) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 08:17 | 2:45 | 0/0/0 | 0/2/0 | 0/0/0 | 67,947/1,409 | einfracz / qwen3.8-27b | 6 | 2/1 | 6/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from keyword rules on the title and abstract — no LLM answer yet).">dog</span> | [Chow_1979_ouabain_receptor_binding](drugs/drug_chlormadinone/pd_Chow_1979_ouabain_receptor_binding.md) | ouabain receptor binding ← chlormadinone acetate · inhibition effect | — | Chow E et al., Ouabain receptor binding of hydroxyprog…, British journal of pharmaco… (1979) | [10.1111/j.1476-5381.1979.tb08686.x](https://doi.org/10.1111/j.1476-5381.1979.tb08686.x) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (other animal), not measured in people (from keyword rules on the title and abstract — no LLM answer yet).">other animal</span> | [Rafuse_1985_Na_K_ATPase](drugs/drug_chlormadinone/pd_Rafuse_1985_Na_K_ATPase.md) | Na+,K+-ATPase ← chlormadinone acetate · inhibition effect | — | Rafuse PE et al., Effects of mammalian brain extracts and…, Brain research (1985) | [10.1016/0006-8993(85)91186-2](https://doi.org/10.1016/0006-8993(85)91186-2) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=chlormadinone) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 71 matched, 42 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Fukabori_1992.pdf` | Fukabori Y et al., Inhibition of 3 alpha-hydroxysteroid ox…, The Prostate (1992) | pd | 4 | [10.1002/pros.2990210402](https://doi.org/10.1002/pros.2990210402) | [1281319](https://www.ncbi.nlm.nih.gov/pubmed/1281319) | metadata signals extractable PD data (IC50) |
| `Rafuse_1985.pdf` | Rafuse PE et al., Effects of mammalian brain extracts and…, Brain research (1985) | pd | 4 | [10.1016/0006-8993(85)91186-2](https://doi.org/10.1016/0006-8993(85)91186-2) | [2412648](https://www.ncbi.nlm.nih.gov/pubmed/2412648) | metadata signals extractable PD data (IC50) |
| `Wang_2015.pdf` | Wang LL et al., [Study of gonadal hormone drugs in bloc…, Yao xue xue bao = Acta phar… (2015) | pd | 4 | not captured | [27169275](https://www.ncbi.nlm.nih.gov/pubmed/27169275) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-10-07T08:16:24.273212+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | EFSA_2020 | irrelevant | 0 | 0 | The paper is an EFSA risk assessment regarding delayed post-mortem inspection and does not contain pharmacokinetic data for chlormadinone. |
| PGx | Huang_2011 | not_relevant | 0 | 0 | The study investigates in vitro enzyme inhibition by chlormadinone but does not report any pharmacogenomic effects or genetic variant analysis. |
| popPK | Kubli-Garfias_2013 | irrelevant | 0 | 0 | The study investigates progesterone receptor binding mechanisms and behavioral effects in rats, containing no pharmacokinetic parameters for chlormadinone. |
| popPK | McGarry_1993 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of digoxin's effect on calcium channels, using chlormadinone acetate only as a negative control/comparator without reporting any pharmacokinetic parameters. |
| popPK | Weill_2026 | irrelevant | 0 | 0 | The paper is a clinical review regarding the association between progestogen use and meningioma risk, containing no pharmacokinetic modeling or quantitative disposition parameters. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
