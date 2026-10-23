<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V08C&quot;,&quot;href&quot;:&quot;atc/V08C.md&quot;},{&quot;label&quot;:&quot;iron oxide, nanoparticles&quot;}]"></div>

# iron oxide, nanoparticles

- **generic name:** iron oxide, nanoparticles
- **ATC codes:** `V08CB03`
- **DrugBank:** [DB11576](https://go.drugbank.com/drugs/DB11576) · **PubChem:** none
- **molar mass:** 159.687 g/mol (Fe2O3) — DrugBank
- **groups:** approved, investigational

## About

Iron oxide nanoparticles are used as a superparamagnetic contrast agent for magnetic resonance imaging. They are approved and also under investigation for further uses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q419170](https://www.wikidata.org/wiki/Q419170) and the WHO ATC classification; not checked by a person.</small>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="dog" data-age="unknown" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">dog</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Na_2003_reference](drugs/drug_iron_oxide_nanoparticles/IronOxideNanoparticles_Na2003_reference.md) | — | 1-compartment (no model) | 0 | Na JB et al., Pharmacokinetic modeling of phagocytic…, Yonsei medical journal (2003) | [10.3349/ymj.2003.44.3.429](https://doi.org/10.3349/ymj.2003.44.3.429) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 19:06 | 5:57 | 0/1/0 | 0/0/0 | 0/0/0 | 149,802/31,243 | openai / gpt-6-luna | 4 | 0/4 | 4/0 | 0 |

## Coverage

- **PubMed hits:** 14 matched, 14 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 1  ·  extracted 0  ·  needs review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Na_2003.pdf` | Na JB et al., Pharmacokinetic modeling of phagocytic…, Yonsei medical journal (2003) | popPK | 8 | [10.3349/ymj.2003.44.3.429](https://doi.org/10.3349/ymj.2003.44.3.429) | [12833580](https://pubmed.ncbi.nlm.nih.gov/12833580) | The three-compartment analysis reports numeric iron-oxide distribution-volume ratios, although transport constants could not be estimated. |

<sub>queue written 2026-10-07 19:01 UTC</sub>

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


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Biron_oxide_nanoparticles%5D&body=Drug%3A%20iron_oxide_nanoparticles%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_iron_oxide_nanoparticles/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · newest extraction 2026-10-07 19:01 UTC</sub>
