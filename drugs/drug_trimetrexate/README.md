<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;P01A&quot;,&quot;href&quot;:&quot;atc/P01A.md&quot;},{&quot;label&quot;:&quot;trimetrexate&quot;}]"></div>

# trimetrexate

- **generic name:** trimetrexate
- **ATC codes:** `P01AX07`
- **DrugBank:** [DB01157](https://go.drugbank.com/drugs/DB01157) · **PubChem:** [CID 5583](https://pubchem.ncbi.nlm.nih.gov/compound/5583)
- **molar mass:** 369.4176 g/mol (C19H23N5O3) — DrugBank
- **groups:** approved

## About

Trimetrexate is an antifolate drug used to treat pneumocystosis, a protozoal/fungal lung infection. It is an approved antiprotozoal agent, but it does not appear to be widely marketed and its use is limited.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q126677485](https://www.wikidata.org/wiki/Q126677485) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| trimetrexate | parent | 369.418 | C19H23N5O3 | DrugBank | [5583](https://pubchem.ncbi.nlm.nih.gov/compound/5583) | Grochow_1989, Grochow_1989_2 |

## Parameters across studies

| parameter | as named | value | unit | as reported | population | n | species | status | record |
|---|---|---|---|---|---|---|---|---|---|
| V | V | 13 | L | 13 L | patients with advanced solid tumors | 35 | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Grochow_1989_reference](drugs/drug_trimetrexate/Trimetrexate_Grochow1989_reference.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. Rejected records are left out.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: disposition incomplete — only volume extracted — the engineer needs clearance/e…</sub> | [Grochow_1989_reference](drugs/drug_trimetrexate/Trimetrexate_Grochow1989_reference.md) | — | 1-compartment (no model) | 2 | Grochow LB et al., Phase I trial of trimetrexate glucurona…, Journal of the National Can… (1989) | [10.1093/jnci/81.2.124](https://doi.org/10.1093/jnci/81.2.124) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub> | [Grochow_1989_2_reference](drugs/drug_trimetrexate/Trimetrexate_Grochow1989v2_reference.md) | — | 1-compartment (no model) | 2 | Grochow LB et al., A phase I trial of trimetrexate glucuro…, Cancer chemotherapy and pha… (1989) | [10.1007/BF00304765](https://doi.org/10.1007/BF00304765) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Lee_2010_1_Emax](drugs/drug_trimetrexate/pd_Lee_2010_1_Emax.md) | fractional inhibition of cell growth (1 - fraction affected) ← trimetrexate · direct Emax (saturable) effect | — | Lee JJ et al., Emax model and interaction index for as…, Frontiers in bioscience (El… (2010) | [10.2741/e116](https://doi.org/10.2741/e116) |
| <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [White_2003_cancer_cell_growth_inhibition](drugs/drug_trimetrexate/pd_White_2003_cancer_cell_growth_inhibition.md) | cancer cell growth inhibition ← Trimetrexate (TMQ) in three-drug mixture with LY309887 and Tomudex · direct sigmoid Emax (Hill) effect | — | White DB et al., A new nonlinear mixture response surfac…, Current drug metabolism (2003) | [10.2174/1389200033489316](https://doi.org/10.2174/1389200033489316) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 05:26 | 1:26 | 0/1/1 | 1/1/0 | 0/0/0 | 26,156/2,494 | ollama / glm-5.3-flash | 1 | 0/0 | 1/0 | 0 |

## Coverage

- **PubMed hits:** 11 matched, 11 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 0  ·  needs_review 1  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_3 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Grochow_1989.pdf` | Grochow LB et al., Phase I trial of trimetrexate glucurona…, Journal of the National Can… (1989) | popPK | 10 | [10.1093/jnci/81.2.124](https://doi.org/10.1093/jnci/81.2.124) | [2909752](https://pubmed.ncbi.nlm.nih.gov/2909752) | Human phase I PK study reporting numeric CL (31 mL/min/m2) and Vd (13 L/m2) for trimetrexate directly in the abstract. |
| `Grochow_1989_2.pdf` | Grochow LB et al., A phase I trial of trimetrexate glucuro…, Cancer chemotherapy and pha… (1989) | popPK | 10 | [10.1007/BF00304765](https://doi.org/10.1007/BF00304765) | [2758561](https://pubmed.ncbi.nlm.nih.gov/2758561) | Human phase I PK study reporting clearance (36.5 ± 21 ml/min/m2), Vss, and half-life from compartmental models directly in the abstract. |
| `Lee_2010.pdf` | Lee JJ et al., Emax model and interaction index for as…, Frontiers in bioscience (El… (2010) | pd | 4 | [10.2741/e116](https://doi.org/10.2741/e116) | [20036904](https://www.ncbi.nlm.nih.gov/pubmed/20036904) | metadata signals extractable PD data (Emax) |

<sub>queue written 2026-10-07T05:26:13.720571+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Hattinger_2017 | not_relevant | 3 | 1 | Abstract of a review on antifolate pharmacogenomics in osteosarcoma; no specific trimetrexate PK/PD parameter-genotype effects reported. |
| popPK | Hooijberg_2003 | irrelevant | 0 | 0 | In-vitro cell study of folate transporters; trimetrexate is only a DHFR inhibitor tool, no PK parameters reported. |
| popPK | Lee_2010 | irrelevant | 0 | 0 | In-vitro drug-interaction (synergy) study with no pharmacokinetic disposition parameters for trimetrexate. |
| PGx | Takemura_1996 | not_relevant | 2 | 3 | The paper studies ZD1694 (raltitrexed) activity/metabolism in resistant sublines; trimetrexate is only mentioned as a selection agent, with no gene-variant effect on TMQ PK/PD parameters reported. |
| PGx | Takemura_2001 | not_relevant | 2 | 2 | Abstract discusses general antifolate resistance mechanisms in cell lines, not a gene variant effect on trimetrexate PK/PD parameters. |
| popPK | White_2003 | irrelevant | 0 | 0 | In vitro drug-interaction (synergism) modeling of cell growth inhibition; no pharmacokinetic disposition parameters for trimetrexate are reported. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-07 05:26 UTC</sub>
