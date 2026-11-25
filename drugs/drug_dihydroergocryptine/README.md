<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N04B&quot;,&quot;href&quot;:&quot;atc/N04B.md&quot;},{&quot;label&quot;:&quot;Dihydroergocryptine&quot;}]"></div>

# Dihydroergocryptine

- **generic name:** Dihydroergocryptine
- **ATC codes:** `N04BC03`
- **DrugBank:** [DB13385](https://go.drugbank.com/drugs/DB13385) · **PubChem:** none
- **groups:** investigational

## About

Dihydroergocryptine is a dopamine agonist used in the treatment of Parkinson's disease. This drug is currently classified as investigational.

<small>⚠️ **Unverified** — written by `qwen3.8-27b` from general knowledge (no Wikidata entry found) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| dihydroergocryptine | parent | 577.726 | C32H43N5O5 | PubChem | [114948](https://pubchem.ncbi.nlm.nih.gov/compound/114948) | Ronca_1996 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub> | [Ronca_1996_reference](drugs/drug_dihydroergocryptine/Dihydroergocryptine_Ronca1996_reference.md) | — | 1-compartment (no model) | 2 | Ronca F et al., Pharmacokinetic and Metabolism Study in…, American journal of therape… (1996) | [10.1097/00045391-199608000-00002](https://doi.org/10.1097/00045391-199608000-00002) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-23 21:01 | 0:02 | 1/0/0 | 0/0/0 | 0/0/0 | 210/61 | einfracz / qwen3.8-27b | 2 | 2/0 | 2/0 | 0 |

## Coverage

- **PubMed hits:** 25 matched, 24 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs review 1  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_4 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Etchegoyen_1986.pdf` | Etchegoyen GS et al., Binding and effects of catecholestrogen…, European journal of pharmac… (1986) | pd | 4 | [10.1016/0014-2999(86)90329-8](https://doi.org/10.1016/0014-2999(86)90329-8) | [3021471](https://www.ncbi.nlm.nih.gov/pubmed/3021471) | metadata signals extractable PD data (EC50) |
| `Peters_1983.pdf` | Peters JR et al., Alpha 1-adrenoreceptors on intact rat a…, Endocrinology (1983) | pd | 4 | [10.1210/endo-113-1-133](https://doi.org/10.1210/endo-113-1-133) | [6305631](https://www.ncbi.nlm.nih.gov/pubmed/6305631) | metadata signals extractable PD data (IC50) |
| `Williams_1981.pdf` | Williams RS et al., Subtype specificity of alpha-adrenergic…, Journal of cardiovascular p… (1981) | pd | 4 | [10.1097/00005344-198105000-00011](https://doi.org/10.1097/00005344-198105000-00011) | [6168833](https://www.ncbi.nlm.nih.gov/pubmed/6168833) | metadata signals extractable PD data (EC50) |
| `de_2001.pdf` | de Mey C et al., Erythromycin increases plasma concentra…, Clinical pharmacology and t… (2001) | pgx | 7 | [10.1067/mcp.2001.117286](https://doi.org/10.1067/mcp.2001.117286) | [11503008](https://www.ncbi.nlm.nih.gov/pubmed/11503008) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |

<sub>queue written 2026-11-23 21:01 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Althaus_2000 | irrelevant | 0 | 0 | The study is an in vitro mechanistic investigation of CYP450 isoforms involved in DHEC metabolism and does not report quantitative pharmacokinetic parameters (CL, V, ka, etc.) for the drug in vivo. |
| PGx | Althaus_2000 | not_relevant | 0 | 0 | The study identifies CYP3A4 as the metabolizing enzyme using cell lines and hepatocytes but does not report any human genotype-phenotype association or pharmacogenomic effect on PK/PD parameters. |
| popPK | Anderson_1988 | irrelevant | 0 | 0 | The study uses [3H]dihydroergocryptine as a radioligand for receptor binding assays in rabbit bladder tissue, not as a pharmacokinetic subject drug. |
| PGx | Anderson_1988 | not_relevant | 0 | 0 | The paper investigates receptor binding and contractility in rabbit bladder tissue; it does not study dihydroergocryptine as a therapeutic drug or report pharmacogenomic effects on its PK/PD. |
| popPK | Bronzetti_1994 | irrelevant | 0 | 0 | This is an in vitro radioligand binding study where dihydroergocryptine is used as a radiolabeled ligand to probe alpha-adrenoceptors, not as a subject drug for pharmacokinetic analysis. |
| PGx | Bronzetti_1994 | not_relevant | 0 | 0 | The study uses dihydroergocryptine as a radioligand to study calcium channel blocker binding, not as a drug subject to pharmacogenomic analysis. |
| popPK | Costa_1993 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study using dihydroergocryptine as a radioligand for receptor binding assays, not a pharmacokinetic study of its disposition. |
| PGx | Costa_1993 | not_relevant | 0 | 0 | The study describes receptor binding and pharmacodynamics of various agents on smooth muscle cells but does not report any pharmacogenomic effect of a gene variant on the pharmacokinetics or pharmacodynamics of dihydroergocryptine. |
| popPK | EFSA_2024 | irrelevant | 0 | 0 | This is an EFSA risk assessment of ergot alkaloids (including ergocryptine as a feed contaminant), not a PK study of the drug dihydroergocryptine, and no disposition parameter values are present. |
| popPK | Etchegoyen_1986 | irrelevant | 0 | 0 | The study is an in vitro mechanistic paper on catecholestrogens in guinea-pig membranes where dihydroergocryptine is used only as a radioligand to measure alpha-adrenoceptor binding, not as a subject drug for PK analysis. |
| PGx | Etchegoyen_1986 | not_relevant | 0 | 0 | The paper uses dihydroergocryptine as a radioactive ligand to assay adrenoceptor binding and does not report any pharmacokinetic or pharmacodynamic parameters of the drug itself, nor any genetic variations. |
| popPK | Gundlach_1983 | irrelevant | 0 | 0 | The paper is an in vitro receptor binding study focused on D-2 receptor affinity and guanine nucleotide effects, not pharmacokinetic disposition. |
| PGx | Gundlach_1983 | not_relevant | 0 | 0 | The paper is an in vitro receptor binding study that does not investigate the impact of genetic variants or genotypes on the pharmacokinetics or pharmacodynamics of dihydroergocryptine. |
| popPK | Mohell_1983 | irrelevant | 0 | 0 | The paper is a receptor binding study using dihydroergocryptine only as a displacement agent to characterize alpha 1-adrenergic receptors, not a pharmacokinetic study of dihydroergocryptine. |
| PGx | Mohell_1983 | not_relevant | 0 | 0 | The paper studies adrenergic receptor binding in hamster brown adipose tissue and does not report any pharmacogenomic effects (gene variants) on the PK or PD of dihydroergocryptine. |
| popPK | Motulsky_1982 | irrelevant | 0 | 0 | The study is an in-vitro receptor binding study using dihydroergocryptine as a radioligand, not a pharmacokinetic disposition study. |
| PGx | Motulsky_1982 | not_relevant | 0 | 0 | The paper investigates receptor binding characteristics of dihydroergocryptine and does not report any pharmacogenomic effects on its pharmacokinetic or pharmacodynamic parameters. |
| popPK | Peters_1983 | irrelevant | 0 | 0 | The study uses dihydroergocryptine as a radioligand for in vitro receptor binding assays, not for pharmacokinetic disposition. |
| PGx | Peters_1983 | not_relevant | 0 | 0 | The paper uses dihydroergocryptine as a radioligand to characterize adrenergic receptors in rat pituitary cells and does not report any genetic variants or pharmacogenomic effects on the drug's PK/PD. |
| PGx | Ronca_1996 | not_relevant | 0 | 0 | The study reports population pharmacokinetics in healthy volunteers but does not investigate the influence of gene variants, genotypes, or phenotypes on the drug's PK or PD parameters. |
| popPK | Sutherland_2023 | irrelevant | 0 | 0 | This is an in vitro secondary pharmacology/ADR association study; dihydroergocryptine is not the subject drug and no PK disposition parameters for it appear in the evidence. |
| popPK | Williams_1981 | irrelevant | 0 | 0 | The study is an in vitro receptor binding assay using dihydroergocryptine as a radioligand, not a pharmacokinetic study of the drug's disposition. |
| PGx | Williams_1981 | not_relevant | 0 | 0 | The paper investigates alpha-adrenergic receptor binding characteristics using dihydroergocryptine as a radioligand, but does not report on the pharmacokinetics or pharmacodynamics of the drug itself, nor does it involve any pharmacogenomic analysis. |
| popPK | Yajima_1987 | irrelevant | 0 | 0 | The study investigates the spasmolytic action of a different drug (Ro 22-4849) in isolated vessels, using dihydroergocryptine only as a radioligand in a binding assay, with no PK parameters reported. |
| PGx | Yajima_1987 | not_relevant | 0 | 0 | The paper studies a different drug (Ro 22-4839) in isolated vessels and only mentions dihydroergocryptine in an in vitro binding assay; it reports no pharmacogenomic effects on PK/PD parameters for dihydroergocryptine. |
| popPK | de_2001 | irrelevant | 0 | 0 | no_text gate: only 83 chars of text extracted (&lt; 400) |
| PGx | de_2001 | not_relevant | 0 | 0 | The paper investigates a drug-drug interaction (erythromycin) and does not report a pharmacogenomic effect (gene variant/genotype) on PK/PD. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bdihydroergocryptine%5D&body=Drug%3A%20dihydroergocryptine%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_dihydroergocryptine/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-23 20:58 UTC</sub>
