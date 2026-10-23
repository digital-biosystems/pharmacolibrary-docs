<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05C&quot;,&quot;href&quot;:&quot;atc/N05C.md&quot;},{&quot;label&quot;:&quot;zaleplon&quot;}]"></div>

# zaleplon

- **generic name:** zaleplon
- **ATC codes:** `N05CF03`
- **DrugBank:** [DB00962](https://go.drugbank.com/drugs/DB00962) · **PubChem:** [CID 5719](https://pubchem.ncbi.nlm.nih.gov/compound/5719)
- **molar mass:** 305.3339 g/mol (C17H15N5O) — DrugBank
- **groups:** approved, illicit

## About

Zaleplon is a hypnotic and sedative drug used to treat insomnia. It is an approved medicine, though its European Union products have been withdrawn, and it is also used illicitly.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q145052](https://www.wikidata.org/wiki/Q145052) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## popPK records

_not available_

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 23:09 | 2:08 | 0/0/0 | 0/0/0 | 0/0/0 | 20,354/999 | ollama / glm-5.3-flash | 1 | 1/0 | 1/0 | 0 |

## Coverage

- **PubMed hits:** 19 matched, 19 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_5 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Drover_2000.pdf` | Drover D et al., Pharmacokinetics, pharmacodynamics, and…, Clinical therapeutics (2000) | popPK | 6 | [10.1016/s0149-2918(00)83043-x](https://doi.org/10.1016/s0149-2918(00)83043-x) | [11192136](https://pubmed.ncbi.nlm.nih.gov/11192136) | Human zaleplon PK study using NONMEM, but only the half-life (60.1±8.9 min) is given; CL/V and population-PK parameter values are not in the evidence. |
| `Beedham_2003.pdf` | Beedham C et al., Ziprasidone metabolism, aldehyde oxidas…, Journal of clinical psychop… (2003) | pgx | 8 | [10.1097/01.jcp.0000084028.22282.f2](https://doi.org/10.1097/01.jcp.0000084028.22282.f2) | [12826984](https://www.ncbi.nlm.nih.gov/pubmed/12826984) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Hesse_2003.pdf` | Hesse LM et al., Clinically important drug interactions…, CNS drugs (2003) | pgx | 7 | [10.2165/00023210-200317070-00004](https://doi.org/10.2165/00023210-200317070-00004) | [12751920](https://www.ncbi.nlm.nih.gov/pubmed/12751920) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Najib_2006.pdf` | Najib J, Eszopiclone, a nonbenzodiazepine sedati…, Clinical therapeutics (2006) | pgx | 7 | [10.1016/j.clinthera.2006.04.014](https://doi.org/10.1016/j.clinthera.2006.04.014) | [16750462](https://www.ncbi.nlm.nih.gov/pubmed/16750462) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Renwick_1998.pdf` | Renwick AB et al., Metabolism of Zaleplon by human hepatic…, Xenobiotica; the fate of fo… (1998) | pgx | 7 | [10.1080/004982598239452](https://doi.org/10.1080/004982598239452) | [9604298](https://www.ncbi.nlm.nih.gov/pubmed/9604298) | metadata signals extractable PGX data (CYP3A, PK/PD-context) |

<sub>queue written 2026-10-06T23:09:22.842132+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Beedham_2003 | not_relevant | 0 | 0 | Paper discusses ziprasidone and aldehyde oxidase; zaleplon only mentioned as AO substrate with no pharmacogenomic effect on its PK/PD parameters. |
| popPK | Drover_2000 | relevant | 6 | 3 | Human zaleplon PK study using NONMEM, but only the half-life (60.1±8.9 min) is given; CL/V and population-PK parameter values are not in the evidence. |
| popPK | Goldschmied_2021 | irrelevant | 0 | 0 | Clinical efficacy/metabolomics study of zaleplon in HIV+ patients with no PK parameters reported. |
| PGx | Hesse_2003 | not_relevant | 2 | 3 | Review of drug-drug interactions (CYP inhibitors/inducers) with zaleplon; no gene variant/genotype effects on PK/PD parameters reported. |
| PGx | Izat_2025 | not_relevant | 0 | 0 | PBPK modeling of AO/CYP3A4-mediated clearance of zaleplon; no gene variant/genotype/phenotype effects on PK/PD reported. |
| PGx | Najib_2006 | not_relevant | 0 | 0 | Review of eszopiclone PK/PD with no pharmacogenomic (gene variant) effects reported for zaleplon. |
| popPK | Petroski_2006 | irrelevant | 0 | 0 | In-vitro electrophysiology study of indiplon; zaleplon is only a potency comparator, no PK parameters. |
| PGx | Renwick_1998 | not_relevant | 2 | 3 | Identifies CYP3A as the enzyme catalyzing zaleplon N-deethylation via correlation/inhibition studies, but no gene variant/genotype effect on a PK/PD parameter is reported. |
| PGx | Strelevitz_2012 | not_relevant | 0 | 0 | In vitro enzyme inhibition study of aldehyde oxidase using zaleplon as probe; no gene variant/genotype/phenotype effect on PK/PD reported. |
| PGx | Tanoue_2013 | not_relevant | 2 | 3 | Species/chimeric-liver model differences in zaleplon metabolism, not a gene variant/genotype/phenotype effect on PK/PD parameters. |
| popPK | Wegner_2008 | irrelevant | 0 | 0 | In-vitro receptor binding/pharmacology study of indiplon derivatives; zaleplon is only a reference ligand, no PK parameters. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09)</sub>
