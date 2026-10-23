<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N07B&quot;,&quot;href&quot;:&quot;atc/N07B.md&quot;},{&quot;label&quot;:&quot;levacetylmethadol&quot;}]"></div>

# levacetylmethadol

- **generic name:** levacetylmethadol
- **ATC codes:** `N07BC03`
- **DrugBank:** [DB01227](https://go.drugbank.com/drugs/DB01227) · **PubChem:** [CID 15130](https://pubchem.ncbi.nlm.nih.gov/compound/15130)
- **molar mass:** 353.4977 g/mol (C23H31NO2) — DrugBank
- **groups:** approved, withdrawn

## About

Levacetylmethadol is a synthetic opioid that was used to treat opioid dependence. It has been withdrawn, including from the European Union market, and is no longer in use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q411799](https://www.wikidata.org/wiki/Q411799) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| levacetylmethadol | parent | 353.498 | C23H31NO2 | DrugBank | [15130](https://pubchem.ncbi.nlm.nih.gov/compound/15130) | Finkle_1982 |
| dinor-LAAM | metabolite | 325.452 | C21H27NO2 | PubChem | [170384](https://pubchem.ncbi.nlm.nih.gov/compound/170384) | Finkle_1982 |
| nor-LAAM | metabolite | 339.479 | C22H29NO2 | PubChem | [135260](https://pubchem.ncbi.nlm.nih.gov/compound/135260) | Finkle_1982 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub> | [Finkle_1982_reference](drugs/drug_levacetylmethadol/Levacetylmethadol_Finkle1982_reference.md) | — | general linear (no model) | 3 | Finkle BS et al., Plasma and urine disposition of 1-alpha…, Journal of analytical toxic… (1982) | [10.1093/jat/6.2.100](https://doi.org/10.1093/jat/6.2.100) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Xiao_2001_86Rb_efflux](drugs/drug_levacetylmethadol/pd_Xiao_2001_86Rb_efflux.md) | nicotine-stimulated 86Rb+ efflux ← (-)-alpha-acetylmethadol hydrochloride (LAAM) · direct sigmoid Emax (Hill) effect | — | Xiao Y et al., Blockade of rat alpha3beta4 nicotinic r…, The Journal of pharmacology… (2001) | — |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=levacetylmethadol).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| metabolism | liver | `CYP3A4` substrate, `CYP3A7` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: CHRNA3 (target), CHRNB4 (other/unknown), OPRM1 (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 03:30 | 2:15 | 0/1/0 | 0/1/0 | 0/0/0 | 19,877/1,835 | ollama / glm-5.3-flash | 1 | 0/1 | 1/0 | 0 |

## Coverage

- **PubMed hits:** 11 matched, 11 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_3 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Finkle_1982.pdf` | Finkle BS et al., Plasma and urine disposition of 1-alpha…, Journal of analytical toxic… (1982) | popPK | 8 | [10.1093/jat/6.2.100](https://doi.org/10.1093/jat/6.2.100) | [7098447](https://pubmed.ncbi.nlm.nih.gov/7098447) | Human disposition study of LAAM with numeric half-lives for parent and metabolites, though no CL/V values are given. |
| `Crettol_2007.pdf` | Crettol S et al., In vitro P-glycoprotein-mediated transp…, Pharmacology (2007) | pgx | 7 | [10.1159/000107104](https://doi.org/10.1159/000107104) | [17690563](https://www.ncbi.nlm.nih.gov/pubmed/17690563) | metadata signals extractable PGX data (ABCB1, PK/PD-context) |
| `Oda_2001.pdf` | Oda Y et al., Metabolism of methadone and levo-alpha-…, The Journal of pharmacology… (2001) | pgx | 7 |  | [11504799](https://www.ncbi.nlm.nih.gov/pubmed/11504799) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |

<sub>queue written 2026-10-07 03:29 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Baker_2006 | not_relevant | 0 | 0 | Study examines buprenorphine/naloxone and ARV effects on QT interval; no pharmacogenomic variant/genotype effect on levacetylmethadol PK/PD is reported. |
| PGx | Cottrill_2021 | not_relevant | 3 | 2 | Levacetylmethadol is only listed as metabolized by CYP3A4/3A5; no genotype-specific PK/PD parameter values or effect sizes are reported. |
| PGx | Crettol_2007 | not_relevant | 4 | 3 | In vitro P-gp substrate study without a gene variant/genotype comparison or measured PK/PD parameter change in patients. |
| PGx | Oda_2001 | not_relevant | 3 | 5 | In vitro enzyme kinetics of CYP3A4/2B6 metabolism of LAAM; no gene variant/genotype/phenotype effect on in vivo PK/PD parameters reported. |
| PGx | Oda_2001_2 | not_relevant | 0 | 0 | In vitro enzyme kinetics of CYP3A4 metabolism; no gene variant/genotype/phenotype effect on PK/PD parameters reported. |
| popPK | Xiao_2001 | irrelevant | 0 | 0 | In-vitro mechanistic study of nicotinic receptor blockade by methadone/LAAM; no PK disposition parameters for levacetylmethadol. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Blevacetylmethadol%5D&body=Drug%3A%20levacetylmethadol%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_levacetylmethadol/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · newest extraction 2026-10-07 03:29 UTC</sub>
