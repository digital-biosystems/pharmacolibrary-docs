<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V04C&quot;,&quot;href&quot;:&quot;atc/V04C.md&quot;},{&quot;label&quot;:&quot;ceruletide&quot;}]"></div>

# ceruletide

- **generic name:** ceruletide
- **ATC codes:** `V04CC04`
- **DrugBank:** [DB00403](https://go.drugbank.com/drugs/DB00403) · **PubChem:** [CID 16129675](https://pubchem.ncbi.nlm.nih.gov/compound/16129675)
- **molar mass:** 1352.405 g/mol (C58H73N13O21S2) — DrugBank
- **groups:** approved

## About

Ceruletide is an oligopeptide that stimulates digestive secretions and is used to treat paralytic ileus and as a diagnostic aid for pancreatic malfunction. It is widely used for inducing pancreatitis in experimental animal models and for diagnostic purposes.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q5065299](https://www.wikidata.org/wiki/Q5065299), [Wikipedia](https://en.wikipedia.org/wiki/Ceruletide?oldid=1355589801) (CC BY-SA 4.0) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-23 19:37 | 0:11 | 0/0/0 | 0/0/0 | 0/0/0 | 3,359/176 | einfracz / qwen3.8-27b | 1 | 0/1 | 1/0 | 0 |

## Coverage

- **PubMed hits:** 6 matched, 6 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Verme_1990.pdf` | Verme TB et al., Regulation of pancreatic duct epithelia…, The American journal of phy… (1990) | pd | 4 | [10.1152/ajpgi.1990.258.6.G833](https://doi.org/10.1152/ajpgi.1990.258.6.G833) | [2193537](https://www.ncbi.nlm.nih.gov/pubmed/2193537) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-11-23 19:37 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Flandez_2014 | irrelevant | 0 | 0 | The study focuses on the genetic role of Nr5a2 in pancreatic tumorigenesis in mice using caerulein to induce pancreatitis, not the pharmacokinetics of ceruletide. |
| PGx | Flandez_2014 | not_relevant | 0 | 0 | The paper investigates the role of Nr5a2 in pancreatitis and tumorigenesis; the mention of 'caerulein' refers to the toxic agent used to induce pancreatitis in the animal model, not the therapeutic drug 'ceruletide' being studied for pharmacogenomic effects on its PK/PD. |
| popPK | Harro_1993 | irrelevant | 0 | 0 | The study is a mechanistic electrophysiology experiment investigating receptor effects in rat brain slices, containing no pharmacokinetic parameters for caerulein (ceruletide). |
| PGx | Harro_1993 | not_relevant | 0 | 0 | The study investigates the neurobiological interaction between CCKB receptor activation and glutamate in rat brain slices, not the pharmacogenomics of ceruletide. |
| popPK | Morisset_1989 | irrelevant | 0 | 0 | The study focuses on the pharmacodynamic effects of epidermal growth factor and caerulein on pancreatic cell proliferation and enzyme secretion, not on the pharmacokinetic disposition parameters (CL, V, t1/2) of ceruletide. |
| PGx | Morisset_1989 | not_relevant | 0 | 0 | The study investigates the interaction between EGF and caerulein (not ceruletide) in a rat model without examining any genetic variants or pharmacogenomic effects. |
| PGx | Tanoğlu_2021 | not_relevant | 1 | 3 | Study measures gene expression (Abcc2/5, Abcg2) as disease/treatment markers, not a genotype effect on ceruletide PK/PD parameters. |
| popPK | Verme_1990 | irrelevant | 0 | 0 | The paper is an in vitro mechanistic study on pancreatic duct cell growth, not a pharmacokinetic study, and ceruletide is used as a trophic factor rather than the subject of PK analysis. |
| PGx | Verme_1990 | not_relevant | 0 | 0 | The paper investigates the trophic effects of various growth factors on pancreatic duct epithelial growth and does not involve pharmacogenomics, ceruletide pharmacokinetics, or pharmacodynamics. |
| popPK | Zetler_1984 | irrelevant | 0 | 0 | This is an in-vitro pharmacodynamic study measuring smooth muscle stimulation, not a pharmacokinetic study with disposition parameters. |
| PGx | Zetler_1984 | not_relevant | 0 | 0 | This study is a pharmacological investigation of smooth muscle stimulation and potency/efficacy in animal models, not a pharmacogenomic study linking gene variants to PK/PD parameters in humans. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bceruletide%5D&body=Drug%3A%20ceruletide%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_ceruletide/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>
