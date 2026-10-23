<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01D&quot;,&quot;href&quot;:&quot;atc/J01D.md&quot;},{&quot;label&quot;:&quot;cefpirome&quot;}]"></div>

# cefpirome

- **generic name:** cefpirome
- **ATC codes:** `J01DE02`
- **DrugBank:** [DB13682](https://go.drugbank.com/drugs/DB13682) · **PubChem:** none
- **molar mass:** 514.577 g/mol (C22H22N6O5S2) — DrugBank
- **groups:** approved

## About

Cefpirome is a fourth-generation cephalosporin antibiotic used to treat bacterial infections. It is an approved antibiotic, though it does not appear to be authorised across the whole European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q2943814](https://www.wikidata.org/wiki/Q2943814) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| cefpirome | parent | 514.577 | C22H22N6O5S2 | DrugBank | — | Malerczyk_1987, Rajput_2008 |

## Parameters across studies

| parameter | as named | value | unit | as reported | population | n | species | status | record |
|---|---|---|---|---|---|---|---|---|---|
| CL | CL | — | L/h | 0.29 Lkg(-1)h(-1) | febrile buffalo calves | &gt; | cattle | <span class="pk-badge pk-badge--orange">Needs review</span> | [Rajput_2008_reference](drugs/drug_cefpirome/Cefpirome_Rajput2008_reference.md) |
| V | V | 11.6 ‡ | L | 11.6 L/70 kg | healthy adults | 10 | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Malerczyk_1987_reference](drugs/drug_cefpirome/Cefpirome_Malerczyk1987_reference.md) |
| V | V | 52.5 ‡ | L | 0.75 Lkg(-1) | febrile buffalo calves | &gt; | cattle | <span class="pk-badge pk-badge--orange">Needs review</span> | [Rajput_2008_reference](drugs/drug_cefpirome/Cefpirome_Rajput2008_reference.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. ‡ given per kg in the paper; shown for a 70 kg adult. — the reported unit did not convert; the value is listed as reported. Rejected records are left out.</sub>

<div class="pk-forest-row"><svg class="pk-forest" xmlns="http://www.w3.org/2000/svg" width="560" height="80" viewBox="0 0 560 80" role="img" aria-label="V across studies"><text x="190" y="14" font-size="12" font-weight="600">V (L, log scale)</text><line x1="190.0" y1="18" x2="190.0" y2="58" stroke="#ddd"/><text x="190.0" y="72" font-size="10" text-anchor="middle">10</text><line x1="540.0" y1="18" x2="540.0" y2="58" stroke="#ddd"/><text x="540.0" y="72" font-size="10" text-anchor="middle">100</text><text x="184" y="34.0" font-size="11" text-anchor="end">Malerczyk_1987 · V ·/kg</text><circle cx="212.6" cy="30.0" r="4" fill="#ef6c00"><title>Malerczyk_1987 · V ·/kg: 11.6 L</title></circle><text x="184" y="50.0" font-size="11" text-anchor="end">Rajput_2008 · V ·/kg</text><circle cx="442.1" cy="46.0" r="4" fill="#ef6c00"><title>Rajput_2008 · V ·/kg: 52.5 L</title></circle></svg></div>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: disposition incomplete — no disposition parameter from this paper; review-gap-f…</sub> | [Malerczyk_1987_reference](drugs/drug_cefpirome/Cefpirome_Malerczyk1987_reference.md) | — | 1-compartment (no model) | 2 | Malerczyk V et al., Single and multiple dose pharmacokineti…, Infection (1987) | [10.1007/BF01646053](https://doi.org/10.1007/BF01646053) |
| <span class="pk-rf" hidden data-species="cattle" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (cattle), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">cattle</span><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q88, Q22 — no SI value to build from</sub> | [Rajput_2008_reference](drugs/drug_cefpirome/Cefpirome_Rajput2008_reference.md) | — | 1-compartment (no model) | 4 | Rajput N et al., Influence of experimentally induced fev…, Environmental toxicology an… (2008) | [10.1016/j.etap.2008.06.003](https://doi.org/10.1016/j.etap.2008.06.003) |
| <span class="pk-rf" hidden data-species="human" data-age="unknown" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub> | [Haseeb_2022_reference](drugs/drug_cefpirome/Cefpirome_Haseeb2022_reference.md) | — | 2-compartment (no model) | 3 | Haseeb A et al., Dose optimization of β-lactams antibiot…, Frontiers in pharmacology (2022) | [10.3389/fphar.2022.964005](https://doi.org/10.3389/fphar.2022.964005) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Nakayama_1992_reference](drugs/drug_cefpirome/Cefpirome_Nakayama1992_reference.md) | — | 1-compartment (no model) | 0 | Nakayama I et al., Single- and multiple-dose pharmacokinet…, Journal of clinical pharmac… (1992) | [10.1002/j.1552-4604.1992.tb03834.x](https://doi.org/10.1002/j.1552-4604.1992.tb03834.x) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Ogata_1991_reference](drugs/drug_cefpirome/Cefpirome_Ogata1991_reference.md) | — | 1-compartment (no model) | 0 | Ogata Y et al., [Pharmacokinetics of cefpirome (CPR) in…, Kansenshogaku zasshi. The J… (1991) | [10.11150/kansenshogakuzasshi1970.65.1514](https://doi.org/10.11150/kansenshogakuzasshi1970.65.1514) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 11:10 | 6:22 | 2/3/0 | 0/0/0 | 0/0/0 | 207,422/11,835 | einfracz / qwen3.8-27b | 7 | 2/3 | 7/0 | 1 |

## Coverage

- **PubMed hits:** 54 matched, 46 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 5  ·  extracted 0  ·  needs review 2  ·  rejected 3  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_10 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Bulitta_2011.pdf` | Bulitta JB et al., Comparable population pharmacokinetics…, Antimicrobial agents and ch… (2011) | popPK | 10 | [10.1128/AAC.01484-10](https://doi.org/10.1128/AAC.01484-10) | [21402834](https://pubmed.ncbi.nlm.nih.gov/21402834) | The paper is a population PK study of cefpirome in humans, but specific numeric parameter values are not explicitly listed in the abstract text provided (only percentages and doses). |
| `Maass_1987.pdf` | Maass L et al., Pharmacokinetics of cefpirome (HR 810),…, Infection (1987) | popPK | 10 | [10.1007/BF01646052](https://doi.org/10.1007/BF01646052) | [3610329](https://pubmed.ncbi.nlm.nih.gov/3610329) | The study reports pharmacokinetic parameters for cefpirome in humans using a two-compartment model, with specific values for Cmax and t1/2 present in the text, though other parameters like CL and V are not explicitly listed in the provided evidence. |
| `Malerczyk_1987.pdf` | Malerczyk V et al., Single and multiple dose pharmacokineti…, Infection (1987) | popPK | 10 | [10.1007/BF01646053](https://doi.org/10.1007/BF01646053) | [3610330](https://pubmed.ncbi.nlm.nih.gov/3610330) | Study reports quantitative PK parameters for cefpirome in humans, including a two-compartment model fit and a specific median half-life (2 h), though full CL and V values are not explicitly listed in the text. |
| `Rajput_2008.pdf` | Rajput N et al., Influence of experimentally induced fev…, Environmental toxicology an… (2008) | popPK | 10 | [10.1016/j.etap.2008.06.003](https://doi.org/10.1016/j.etap.2008.06.003) | [21791379](https://pubmed.ncbi.nlm.nih.gov/21791379) | The study reports quantitative disposition parameters (Vd, AUC, t1/2, Cl) for cefpirome in buffalo calves. |
| `Roos_2007.pdf` | Roos JF et al., Population pharmacokinetics and pharmac…, Intensive care medicine (2007) | popPK | 10 | [10.1007/s00134-007-0573-7](https://doi.org/10.1007/s00134-007-0573-7) | [17342515](https://pubmed.ncbi.nlm.nih.gov/17342515) | The paper describes a population pharmacokinetic model for cefpirome, but the extracted evidence provided contains only the abstract and lacks the specific numeric parameter values (CL, V, etc.) which are typically in the results or tables. |
| `Badian_1988.pdf` | Badian M et al., Safety, tolerance and pharmacokinetics…, Chemotherapy (1988) | popPK | 9 | [10.1159/000238594](https://doi.org/10.1159/000238594) | [3180904](https://pubmed.ncbi.nlm.nih.gov/3180904) | The study reports the half-life (2 h) from a two-compartment model, but other quantitative parameters like CL and V are not explicitly listed in the provided text. |
| `Maass_1987_2.pdf` | Maass L et al., Dose linearity testing of intravenous c…, Infection (1987) | popPK | 9 | [10.1007/BF01646051](https://doi.org/10.1007/BF01646051) | [3610328](https://pubmed.ncbi.nlm.nih.gov/3610328) | The study reports PK data for cefpirome in humans, but only provides specific values for dose linearity (r-value) and a general estimate for half-life (~2h), lacking specific numeric values for clearance, volume, or intercompartmental clearance in the text. |
| `Nakayama_1992.pdf` | Nakayama I et al., Single- and multiple-dose pharmacokinet…, Journal of clinical pharmac… (1992) | popPK | 9 | [10.1002/j.1552-4604.1992.tb03834.x](https://doi.org/10.1002/j.1552-4604.1992.tb03834.x) | [1564130](https://pubmed.ncbi.nlm.nih.gov/1564130) | Study reports quantitative PK parameters for cefpirome in humans, specifically citing a half-life of 1.7 hours and a two-compartment model, though specific clearance or volume values are not explicitly listed in the provided text. |
| `Isert_1992.pdf` | Isert D et al., Pharmacokinetics of cefpirome administe…, The Journal of antimicrobia… (1992) | popPK | 5 | [10.1093/jac/29.suppl_a.31](https://doi.org/10.1093/jac/29.suppl_a.31) | [1601754](https://pubmed.ncbi.nlm.nih.gov/1601754) | The study describes a two-compartment PK model for cefpirome in rats and dogs, but specific quantitative values for clearance, volume, or rate constants are not present in the provided evidence, only half-life ranges and urinary recovery percentages. |
| `Müller_1997.pdf` | Müller M et al., Relationship between serum and free int…, Journal of clinical pharmac… (1997) | popPK | 5 | [10.1002/j.1552-4604.1997.tb04294.x](https://doi.org/10.1002/j.1552-4604.1997.tb04294.x) | [9506005](https://pubmed.ncbi.nlm.nih.gov/9506005) | The study describes a population-PK model fit for cefpirome, but no specific numeric parameter values (CL, V, etc.) are present in the provided text. |

<sub>queue written 2026-10-07 11:06 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Badian_1988 | relevant | 9 | 2 | The study reports the half-life (2 h) from a two-compartment model, but other quantitative parameters like CL and V are not explicitly listed in the provided text. |
| popPK | Bulitta_2011 | relevant | 10 | 4 | The paper is a population PK study of cefpirome in humans, but specific numeric parameter values are not explicitly listed in the abstract text provided (only percentages and doses). |
| popPK | Facca_1998 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of ceftizoxime, not cefpirome. |
| popPK | Fitoussi_1995 | irrelevant | 1 | 0 | This is an in vitro pharmacodynamic study simulating a CSF concentration profile, not a pharmacokinetic study reporting quantitative disposition parameters like clearance or volume for cefpirome. |
| popPK | Haseeb_2022 | irrelevant | 0 | 0 | The paper is a systematic review of β-lactam antibiotics (penicillins, cephalosporins, carbapenems) in pediatrics and adults, and cefpirome is not mentioned or studied in the provided evidence. |
| popPK | Helfer_2022 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of ceftaroline, not cefpirome. |
| popPK | Isert_1992 | relevant | 5 | 0 | The study describes a two-compartment PK model for cefpirome in rats and dogs, but specific quantitative values for clearance, volume, or rate constants are not present in the provided evidence, only half-life ranges and urinary recovery percentages. |
| popPK | Kang_2022 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for meropenem, and cefpirome is only mentioned as a comparator in the discussion with no quantitative PK values provided. |
| popPK | Kashuba_1996 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for ceftazidime, not cefpirome. |
| popPK | Maass_1987 | relevant | 10 | 4 | The study reports pharmacokinetic parameters for cefpirome in humans using a two-compartment model, with specific values for Cmax and t1/2 present in the text, though other parameters like CL and V are not explicitly listed in the provided evidence. |
| popPK | Maass_1987_2 | relevant | 9 | 3 | The study reports PK data for cefpirome in humans, but only provides specific values for dose linearity (r-value) and a general estimate for half-life (~2h), lacking specific numeric values for clearance, volume, or intercompartmental clearance in the text. |
| popPK | Marchand_2005 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of amoxicillin in rats, with cefadroxil (a different cephalosporin) used only for probe recovery, and cefpirome is not mentioned or studied. |
| popPK | Müller_1997 | relevant | 5 | 0 | The study describes a population-PK model fit for cefpirome, but no specific numeric parameter values (CL, V, etc.) are present in the provided text. |
| popPK | Roos_2007 | relevant | 10 | 0 | The paper describes a population pharmacokinetic model for cefpirome, but the extracted evidence provided contains only the abstract and lacks the specific numeric parameter values (CL, V, etc.) which are typically in the results or tables. |
| popPK | Santos_2024 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of amphotericin B in rats, not cefpirome. |
| popPK | Vasseur_2014 | irrelevant | 0 | 0 | The study focuses on the antimicrobial efficacy of cefquinome (a different drug) and its impact on resistance in rats, with no pharmacokinetic parameters for cefpirome reported. |
| popPK | Vossen_2018 | irrelevant | 0 | 0 | The study evaluates the pharmacokinetics of doripenem, not cefpirome. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bcefpirome%5D&body=Drug%3A%20cefpirome%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_cefpirome/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · newest extraction 2026-10-07 11:07 UTC</sub>
