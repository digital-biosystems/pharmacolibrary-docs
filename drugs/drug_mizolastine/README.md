<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;R06A&quot;,&quot;href&quot;:&quot;atc/R06A.md&quot;},{&quot;label&quot;:&quot;mizolastine&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Mizolastine_Mentr2001_reference&quot;,&quot;label&quot;:&quot;Mentr\u00e9_2001_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_mizolastine/Mizolastine_Mentr2001_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# mizolastine

- **generic name:** mizolastine
- **ATC codes:** `R06AX25`
- **DrugBank:** [DB12523](https://go.drugbank.com/drugs/DB12523) · **PubChem:** [CID 65906](https://pubchem.ncbi.nlm.nih.gov/compound/65906)
- **molar mass:** 432.503 g/mol (C24H25FN6O) — DrugBank
- **groups:** approved

## About

Mizolastine is a non-sedating antihistamine used to relieve symptoms of allergic conditions such as allergic rhinitis and hives. It is an approved medicine that has been used mainly in European countries, though it is not authorised across the whole European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q417830](https://www.wikidata.org/wiki/Q417830) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| mizolastine | parent | 432.503 | C24H25FN6O | DrugBank | [65906](https://pubchem.ncbi.nlm.nih.gov/compound/65906) | Mentré_2001, Mesnil_1997 |

## Start here

> **Mentré_2001_reference** — <span class="pk-badge pk-badge--orange">Needs review</span> children 6 to 12 years old, n = &gt;=28. [Run it in the simulator](drugs/drug_mizolastine/Mizolastine_Mentr2001_reference.md?tab=Simulation) · [record](drugs/drug_mizolastine/Mizolastine_Mentr2001_reference.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## Parameters across studies

| parameter | as named | value | unit | as reported | population | n | species | status | record |
|---|---|---|---|---|---|---|---|---|---|
| CL | CL/F | 0.1 | L/h | 0.1 L/h | children 6 to 12 years old | &gt;=28 | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Mentré_2001_reference](drugs/drug_mizolastine/Mizolastine_Mentr2001_reference.md) |
| V | V/F | 19.6 ‡ | L | 0.28 L/kg | children 6 to 12 years old | &gt;=28 | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Mentré_2001_reference](drugs/drug_mizolastine/Mizolastine_Mentr2001_reference.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. ‡ given per kg in the paper; shown for a 70 kg adult. Rejected records are left out.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="paediatric" data-status="Needs review" data-sim="yes"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: unreported model parameter default(s): ka</sub> | [Mentré_2001_reference](drugs/drug_mizolastine/Mizolastine_Mentr2001_reference.md) | ▶ model + simulator | 1-compartment, oral | 2 | Mentré F et al., Population pharmacokinetic analysis and…, Journal of pharmacokinetics… (2001) | [10.1023/a:1011583210549](https://doi.org/10.1023/a:1011583210549) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub> | [Mesnil_1997_reference](drugs/drug_mizolastine/Mizolastine_Mesnil1997_reference.md) | — | 1-compartment (no model) | 3 | Mesnil F et al., Pharmacokinetic analysis of mizolastine…, Journal of pharmacokinetics… (1997) | [10.1023/a:1025775912051](https://doi.org/10.1023/a:1025775912051) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">Reproduces with caveats</span> | [Deschamps_2000_flare](drugs/drug_mizolastine/pd_Deschamps_2000_flare.md) | flare ← mizolastine · indirect response — drug inhibits the production of flare | model (no simulator) | Deschamps C et al., Pharmacokinetic and pharmacodynamic mod…, Clinical pharmacology and t… (2000) | [10.1067/mcp.2000.112341](https://doi.org/10.1067/mcp.2000.112341) |
| <span class="pk-badge pk-badge--green">Reproduces with caveats</span> | [Deschamps_2000_wheal](drugs/drug_mizolastine/pd_Deschamps_2000_wheal.md) | wheal ← mizolastine · indirect response — drug inhibits the production of wheal | model (no simulator) | Deschamps C et al., Pharmacokinetic and pharmacodynamic mod…, Clinical pharmacology and t… (2000) | [10.1067/mcp.2000.112341](https://doi.org/10.1067/mcp.2000.112341) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=mizolastine).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | brain | `CYP2D6` inhibitor | DrugBank actor |
| metabolism | liver | `CYP2D6` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: HRH1 (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 21:32 | 1:16 | 1/1/0 | 1/0/0 | 0/0/0 | 34,891/3,524 | einfracz / qwen3.8-27b | 0 | 0/0 | 0/0 | 0 |

## Coverage

- **PubMed hits:** 21 matched, 21 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 0  ·  needs_review 1  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_6 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Mentré_2001.pdf` | Mentré F et al., Population pharmacokinetic analysis and…, Journal of pharmacokinetics… (2001) | popPK | 10 | [10.1023/a:1011583210549](https://doi.org/10.1023/a:1011583210549) | [11468942](https://pubmed.ncbi.nlm.nih.gov/11468942) | The paper reports specific quantitative population PK parameters (Vc/F, CL/F, lambdas, Tabs) for mizolastine in children within the text. |
| `Mesnil_1997.pdf` | Mesnil F et al., Pharmacokinetic analysis of mizolastine…, Journal of pharmacokinetics… (1997) | popPK | 10 | [10.1023/a:1025775912051](https://doi.org/10.1023/a:1025775912051) | [9408856](https://pubmed.ncbi.nlm.nih.gov/9408856) | The paper reports specific numeric pharmacokinetic parameters (CL, Vd, t1/2, absorption duration) for mizolastine in humans directly in the text. |
| `Mesnil_1998.pdf` | Mesnil F et al., Population pharmacokinetic analysis of…, Journal of pharmacokinetics… (1998) | popPK | 10 | [10.1023/a:1020505722924](https://doi.org/10.1023/a:1020505722924) | [9795879](https://pubmed.ncbi.nlm.nih.gov/9795879) | The paper describes a population PK model for mizolastine, but the evidence text only contains qualitative descriptions and validation statistics (SPE mean/variance) without the specific numeric values for clearance, volume, or rate constants. |
| `Deschamps_2000.pdf` | Deschamps C et al., Pharmacokinetic and pharmacodynamic mod…, Clinical pharmacology and t… (2000) | popPK | 9 | [10.1067/mcp.2000.112341](https://doi.org/10.1067/mcp.2000.112341) | [11180025](https://pubmed.ncbi.nlm.nih.gov/11180025) | The paper describes a two-compartment PK model for mizolastine, but the specific numeric disposition parameters (CL, V, ka) are not listed in the abstract evidence provided, which only reports pharmacodynamic values. |
| `Li_2018.pdf` | Li P et al., Effects of UGT1A1, CYP3A5 and ABCB1 Gen…, Basic & clinical pharmacolo… (2018) | pgx | 8 | [10.1111/bcpt.13028](https://doi.org/10.1111/bcpt.13028) | [29702735](https://www.ncbi.nlm.nih.gov/pubmed/29702735) | metadata signals extractable PGX data (UGT1A1, PK/PD-context) |
| `Nicolas_1999.pdf` | Nicolas JM et al., In vitro inhibition of human liver drug…, Chemico-biological interact… (1999) | pgx | 7 | [10.1016/s0009-2797(99)00131-3](https://doi.org/10.1016/s0009-2797(99)00131-3) | [10597902](https://www.ncbi.nlm.nih.gov/pubmed/10597902) | metadata signals extractable PGX data (CYP1A2, PK/PD-context) |

<sub>queue written 2026-10-07T21:32:31.114304+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Broccatelli_2010 | not_relevant | 2 | 0 | The paper predicts transporter-mediated efflux for mizolastine based on physicochemical properties and side effect incidence, but does not report observed pharmacogenomic (genetic variant) effects on PK or PD parameters. |
| PGx | Cataldi_2019 | not_relevant | 0 | 0 | The paper is a review on the cardiac safety (hERG channel blockade) of antihistamines at up-dosed levels and does not report pharmacogenomic effects on pharmacokinetic or pharmacodynamic parameters. |
| popPK | Desager_1995 | irrelevant | 2 | 0 | This is a review article discussing pharmacokinetic-pharmacodynamic relationships generally, and the specific quantitative disposition parameters for mizolastine are not present in the provided text. |
| popPK | Deschamps_2000 | relevant | 9 | 3 | The paper describes a two-compartment PK model for mizolastine, but the specific numeric disposition parameters (CL, V, ka) are not listed in the abstract evidence provided, which only reports pharmacodynamic values. |
| PGx | Guo_2015 | not_relevant | 4 | 5 | The paper reports an association between FCER1A genotypes and clinical efficacy (UAS7) for a group of H1-antihistamines, but does not isolate mizolastine's PK/PD parameters or provide fitted effect sizes for mizolastine specifically. |
| popPK | Mesnil_1998 | relevant | 10 | 2 | The paper describes a population PK model for mizolastine, but the evidence text only contains qualitative descriptions and validation statistics (SPE mean/variance) without the specific numeric values for clearance, volume, or rate constants. |
| PGx | Nicolas_1999 | not_relevant | 0 | 0 | The study reports in vitro enzyme inhibition by mizolastine but does not investigate any pharmacogenomic (genetic) effects on its pharmacokinetics or pharmacodynamics. |
| PGx | Reichmuth_2000 | not_relevant | 0 | 0 | The paper is a general review of allergic rhinitis therapies and does not report specific pharmacogenomic studies or gene-variant effects on mizolastine PK/PD. |
| popPK | Triggiani_2004 | irrelevant | 0 | 0 | This is an in-vitro mechanistic study on mediator release from cells, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| PGx | Yan_2018 | not_relevant | 3 | 5 | The study finds no pharmacogenomic association for mizolastine, only for desloratadine. |
| popPK | Zhou_2009 | irrelevant | 0 | 0 | The paper describes the biological activity of mizolastine on marine invertebrates (anti-settlement) and does not contain pharmacokinetic data. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-07 21:32 UTC</sub>
