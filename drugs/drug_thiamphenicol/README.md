<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01B&quot;,&quot;href&quot;:&quot;atc/J01B.md&quot;},{&quot;label&quot;:&quot;thiamphenicol&quot;}]"></div>

# thiamphenicol

- **generic name:** thiamphenicol
- **ATC codes:** `J01BA02`
- **DrugBank:** [DB08621](https://go.drugbank.com/drugs/DB08621) · **PubChem:** [CID 27200](https://pubchem.ncbi.nlm.nih.gov/compound/27200)
- **molar mass:** 356.222 g/mol (C12H15Cl2NO5S) — DrugBank
- **groups:** investigational

## About

Thiamphenicol is an amphenicol antibiotic used to treat bacterial infections. It is not authorised in the European Union and is considered investigational in major drug databases, though it remains available in some other regions.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q425015](https://www.wikidata.org/wiki/Q425015) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| thiamphenicol | parent | 356.222 | C12H15Cl2NO5S | DrugBank | [27200](https://pubchem.ncbi.nlm.nih.gov/compound/27200) | Abd_2001, Fang_2013, Yang_2011 |
| thiamphenicol glycinate | metabolite | — (mass units only) | — | — | — | — |

## Parameters across studies

| parameter | as named | value | unit | as reported | population | n | species | status | record |
|---|---|---|---|---|---|---|---|---|---|
| CL | CL | 10.5 ‡ | L/h | 2.5 mL/min/kg | beagle dogs | &lt;\|begin_of_text\|&gt; | dog | <span class="pk-badge pk-badge--orange">Needs review</span> | [Yang_2011_reference](drugs/drug_thiamphenicol/Thiamphenicol_Yang2011_reference.md) |
| F | Fab | 1.014 |  | 101.4 % | New Zealand white rabbits |  | rabbit | <span class="pk-badge pk-badge--orange">Needs review</span> | [Abd_2001_reference](drugs/drug_thiamphenicol/Thiamphenicol_Abd2001_reference.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. ‡ given per kg in the paper; shown for a 70 kg adult. Rejected records are left out.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="rabbit" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (rabbit), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rabbit</span><br><sub>blocking: disposition incomplete — only volume extracted — the engineer needs clearance/e…</sub> | [Abd_2001_reference](drugs/drug_thiamphenicol/Thiamphenicol_Abd2001_reference.md) | — | 1-compartment (no model) | 3 | Abd El-Aty AM et al., Pharmacodisposition of thiamphenicol in…, DTW. Deutsche tierarztliche… (2001) | — |
| <span class="pk-rf" hidden data-species="dog" data-age="unknown" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">dog</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub> | [Yang_2011_reference](drugs/drug_thiamphenicol/Thiamphenicol_Yang2011_reference.md) | — | parent + metabolite (no model) | 4 | Yang B et al., Pharmacokinetics of the prodrug thiamph…, Xenobiotica; the fate of fo… (2011) | [10.3109/00498254.2010.535218](https://doi.org/10.3109/00498254.2010.535218) |
| <span class="pk-rf" hidden data-species="fish" data-age="unknown" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (fish), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">fish</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub> | [Fang_2013_reference](drugs/drug_thiamphenicol/Thiamphenicol_Fang2013_reference.md) | — | general linear (no model) | 7 | Fang W et al., Pharmacokinetics and tissue distributio…, Journal of aquatic animal h… (2013) | [10.1080/08997659.2012.754799](https://doi.org/10.1080/08997659.2012.754799) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 10:12 | 0:57 | 2/1/0 | 0/0/0 | 0/0/0 | 36,663/4,301 | einfracz / qwen3.8-27b | 0 | 0/0 | 0/0 | 0 |

## Coverage

- **PubMed hits:** 9 matched, 9 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 3  ·  extracted 0  ·  needs_review 2  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_3 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Abd_2001.pdf` | Abd El-Aty AM et al., Pharmacodisposition of thiamphenicol in…, DTW. Deutsche tierarztliche… (2001) | popPK | 10 | not captured | [11599443](https://pubmed.ncbi.nlm.nih.gov/11599443) | The paper reports quantitative pharmacokinetic parameters (half-lives, volume of distribution, bioavailability, absorption rates) for thiamphenicol in rabbits. |
| `Yang_2011.pdf` | Yang B et al., Pharmacokinetics of the prodrug thiamph…, Xenobiotica; the fate of fo… (2011) | popPK | 10 | [10.3109/00498254.2010.535218](https://doi.org/10.3109/00498254.2010.535218) | [21091321](https://pubmed.ncbi.nlm.nih.gov/21091321) | The study reports detailed quantitative pharmacokinetic parameters (CL, V, MRT, rate constants) for thiamphenicol in beagle dogs within the provided text. |
| `Fang_2013.pdf` | Fang W et al., Pharmacokinetics and tissue distributio…, Journal of aquatic animal h… (2013) | popPK | 9 | [10.1080/08997659.2012.754799](https://doi.org/10.1080/08997659.2012.754799) | [23480025](https://pubmed.ncbi.nlm.nih.gov/23480025) | The study reports quantitative pharmacokinetic parameters (half-lives, AUC, Cmax) for thiamphenicol in shrimp, with numeric values present in the text. |

<sub>queue written 2026-10-07T10:11:58.670606+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Ali_2003 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for florfenicol, not thiamphenicol, which is only mentioned as a structural analogue. |
| PGx | Groenewold_2018 | not_relevant | 0 | 0 | The paper studies a protein in Pseudomonas aeruginosa and its effect on bacterial susceptibility, not human pharmacogenomics. |
| popPK | Lai_2009 | irrelevant | 0 | 0 | The study assesses the toxicological growth inhibition effects of thiamphenicol on microalgae, not its pharmacokinetic disposition parameters. |
| popPK | Lei_2019 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for florfenicol, which is a structural analog of thiamphenicol, but not for thiamphenicol itself. |
| PGx | Piechota_2006 | not_relevant | 0 | 0 | The paper uses thiamphenicol as a tool to inhibit mitochondrial DNA expression in HeLa cells to study bioenergetics, rather than investigating a pharmacogenomic effect of a gene variant on the drug's pharmacokinetics or pharmacodynamics. |
| popPK | Zhang_2021 | irrelevant | 0 | 0 | The study is a toxicity assessment in Daphnia magna and does not contain pharmacokinetic data. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-07 10:12 UTC</sub>
