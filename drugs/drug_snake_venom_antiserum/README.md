<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J06A&quot;,&quot;href&quot;:&quot;atc/J06A.md&quot;},{&quot;label&quot;:&quot;snake venom antiserum&quot;}]"></div>

# snake venom antiserum

- **generic name:** snake venom antiserum
- **ATC codes:** `J06AA03`
- **DrugBank:** not captured · **PubChem:** not captured
- **groups:** not captured

## About

Snake venom antiserum (antivenom) is an immune serum used as an antidote to treat envenomation from snake venom. It is included on the WHO list of essential medicines, indicating it is used widely in healthcare systems worldwide.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q424427](https://www.wikidata.org/wiki/Q424427) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 16:59 | 2:35 | 0/0/0 | 0/0/0 | 0/0/0 | 29,235/5,201 | openai / gpt-6-luna | 3 | 1/2 | 3/0 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 9 matched, 9 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Herrera_2017.pdf` | Herrera M et al., Effect of premedication with subcutaneo…, Biomedicine & pharmacothera… (2017) | popPK | 8 | [10.1016/j.biopha.2017.04.039](https://doi.org/10.1016/j.biopha.2017.04.039) | [28419970](https://pubmed.ncbi.nlm.nih.gov/28419970) | Antivenom pharmacokinetics are studied in rabbits, but no numeric disposition parameters are provided in the evidence. |
| `Yap_2015.pdf` | Yap MK et al., The Effect of a Polyvalent Antivenom on…, Basic & clinical pharmacolo… (2015) | popPK | 8 | [10.1111/bcpt.12398](https://doi.org/10.1111/bcpt.12398) | [25819552](https://pubmed.ncbi.nlm.nih.gov/25819552) | Rabbit antivenom disposition is studied, but numeric half-life and volume values are not present in the provided evidence. |

<sub>queue written 2026-10-07T16:58:05.800909+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Herrera_2017 | relevant | 8 | 0 | Antivenom pharmacokinetics are studied in rabbits, but no numeric disposition parameters are provided in the evidence. |
| popPK | Isbister_2010 | irrelevant | 0 | 0 | This review discusses antivenom effectiveness but reports no quantitative pharmacokinetic parameters. |
| popPK | Knudsen_2020 | irrelevant | 0 | 0 | This is a discussion paper, not a quantitative pharmacokinetic study, and reports no disposition parameter values. |
| popPK | Padula_2016 | irrelevant | 2 | 1 | Antivenom concentrations are reported at limited time points, but no quantitative disposition parameters or PK model are provided. |
| popPK | Tibballs_2020 | irrelevant | 1 | 1 | This human case reports antivenom detection over time but no quantitative pharmacokinetic parameters. |
| popPK | Yap_2015 | relevant | 8 | 1 | Rabbit antivenom disposition is studied, but numeric half-life and volume values are not present in the provided evidence. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
