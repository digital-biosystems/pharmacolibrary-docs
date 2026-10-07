<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V08C&quot;,&quot;href&quot;:&quot;atc/V08C.md&quot;},{&quot;label&quot;:&quot;iron oxide, nanoparticles&quot;}]"></div>

# iron oxide, nanoparticles

- **generic name:** iron oxide, nanoparticles
- **ATC codes:** `V08CB03`
- **DrugBank:** [DB11576](https://go.drugbank.com/drugs/DB11576) · **PubChem:** not captured
- **molar mass:** 159.687 g/mol (Fe2O3) — DrugBank
- **groups:** approved, investigational

## About

Iron oxide nanoparticles are used as a superparamagnetic contrast agent for magnetic resonance imaging. They are approved and also under investigation for further uses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q419170](https://www.wikidata.org/wiki/Q419170) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 19:06 | 5:57 | 0/1/0 | 0/0/0 | 0/0/0 | 149,802/31,243 | openai / gpt-6-luna | 4 | 0/4 | 4/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">dog</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Na_2003_reference](drugs/drug_iron_oxide_nanoparticles/IronOxideNanoparticles_Na2003_reference.md) | — | 1-compartment (no model) | 0 | Na JB et al., Pharmacokinetic modeling of phagocytic…, Yonsei medical journal (2003) | [10.3349/ymj.2003.44.3.429](https://doi.org/10.3349/ymj.2003.44.3.429) |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 14 matched, 14 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Na_2003.pdf` | Na JB et al., Pharmacokinetic modeling of phagocytic…, Yonsei medical journal (2003) | popPK | 8 | [10.3349/ymj.2003.44.3.429](https://doi.org/10.3349/ymj.2003.44.3.429) | [12833580](https://pubmed.ncbi.nlm.nih.gov/12833580) | The three-compartment analysis reports numeric iron-oxide distribution-volume ratios, although transport constants could not be estimated. |

<sub>queue written 2026-10-07T19:01:05.864939+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bjørnerud_2002 | irrelevant | 1 | 0 | The study reports MRI relaxation effects, not quantitative pharmacokinetic disposition parameters. |
| popPK | Bondarenko_2020 | irrelevant | 0 | 0 | This is an ecotoxicity study and reports no quantitative pharmacokinetic disposition parameters. |
| popPK | Gebara_2019 | irrelevant | 0 | 0 | This is an aquatic toxicity study and reports no pharmacokinetic disposition parameters. |
| popPK | Geilich_2017 | irrelevant | 0 | 0 | This is an in-vitro biofilm efficacy study with no quantitative pharmacokinetic disposition parameters. |
| popPK | González-Andrés_2017 | irrelevant | 0 | 0 | This is an acute ecotoxicity study reporting an EC50, not pharmacokinetic disposition parameters. |
| popPK | Ielacqua_2015 | irrelevant | 0 | 0 | SPIO nanoparticles are used as an imaging contrast agent, but no quantitative pharmacokinetic disposition parameters are reported. |
| popPK | Khurana_2012 | irrelevant | 0 | 0 | Ferumoxytol is used as an imaging agent, with no quantitative pharmacokinetic disposition parameters reported. |
| popPK | Kumar_2022 | irrelevant | 0 | 0 | This is an in-vitro antibacterial water-treatment study with no pharmacokinetic disposition parameters. |
| popPK | Mashjoor_2019 | irrelevant | 0 | 0 | The study reports ecotoxicity endpoints, not pharmacokinetic disposition parameters. |
| popPK | McWilliams_2017 | irrelevant | 0 | 0 | This is an in-vitro microwave-heating study and reports no pharmacokinetic disposition parameters. |
| popPK | Thomas_2018 | irrelevant | 0 | 0 | This is a microsphere and cell-delivery study with no quantitative pharmacokinetic parameters for iron oxide nanoparticles. |
| popPK | Wang_2017 | irrelevant | 1 | 1 | This is a brine-shrimp toxicity and uptake study, not a quantitative pharmacokinetic disposition analysis. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 19:01 UTC</sub>
