<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V04C&quot;,&quot;href&quot;:&quot;atc/V04C.md&quot;},{&quot;label&quot;:&quot;lithium chloride&quot;}]"></div>

# lithium chloride

- **generic name:** lithium chloride
- **ATC codes:** `V04CX11`
- **DrugBank:** [DB16607](https://go.drugbank.com/drugs/DB16607) · **PubChem:** none
- **molar mass:** 42.39 g/mol (ClLi) — DrugBank
- **groups:** investigational

## About

Lithium chloride is a chemical compound with roles described as an antimanic agent and an immunologic adjuvant, and it is classified as a diagnostic agent. It is considered investigational and has no authorised marketing status listed in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q422930](https://www.wikidata.org/wiki/Q422930) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| lithium_chloride | metabolite | 42.39 | ClLi | DrugBank | — | Hatfield_2001, Martin_2018, Rosenthal_1986 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="dog" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">dog</span><br><sub>blocking: disposition incomplete — only volume extracted — the engineer needs clearance/e…</sub> | [Rosenthal_1986_reference](drugs/drug_lithium_chloride/LithiumChloride_Rosenthal1986_reference.md) | — | 1-compartment (no model) | 3 | Rosenthal RC et al., Pharmacokinetics of lithium in the dog, Journal of veterinary pharm… (1986) | [10.1111/j.1365-2885.1986.tb00015.x](https://doi.org/10.1111/j.1365-2885.1986.tb00015.x) |
| <span class="pk-rf" hidden data-species="horse" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (horse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">horse</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub> | [Hatfield_2001_reference](drugs/drug_lithium_chloride/LithiumChloride_Hatfield2001_reference.md) | — | 1-compartment (no model) | 2 | Hatfield CL et al., Pharmacokinetics and toxic effects of l…, American journal of veterin… (2001) | [10.2460/ajvr.2001.62.1387](https://doi.org/10.2460/ajvr.2001.62.1387) |
| <span class="pk-rf" hidden data-species="horse" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (horse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">horse</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub> | [Martin_2018_reference](drugs/drug_lithium_chloride/LithiumChloride_Martin2018_reference.md) | — | 1-compartment (no model) | 6 | Martin LM et al., Pharmacokinetics of intravenous lithium…, Equine veterinary journal (2018) | [10.1111/evj.12778](https://doi.org/10.1111/evj.12778) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=lithium_chloride).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: GSK3A (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 22:47 | 5:02 | 1/2/0 | 0/0/0 | 0/0/0 | 81,735/4,128 | ollama / glm-5.3-flash | 5 | 2/3 | 5/0 | 0 |

## Coverage

- **PubMed hits:** 29 matched, 27 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 3  ·  extracted 0  ·  needs review 1  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_3 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Martin_2018.pdf` | Martin LM et al., Pharmacokinetics of intravenous lithium…, Equine veterinary journal (2018) | popPK | 10 | [10.1111/evj.12778](https://doi.org/10.1111/evj.12778) | [29112289](https://pubmed.ncbi.nlm.nih.gov/29112289) | Original PK study of i.v. LiCl in horses with numeric NCA parameters (CL, Vss, t½) reported directly in the abstract. |
| `Rosenthal_1986.pdf` | Rosenthal RC et al., Pharmacokinetics of lithium in the dog, Journal of veterinary pharm… (1986) | popPK | 10 | [10.1111/j.1365-2885.1986.tb00015.x](https://doi.org/10.1111/j.1365-2885.1986.tb00015.x) | [3009841](https://pubmed.ncbi.nlm.nih.gov/3009841) | Original PK study in dogs with two-compartment model reporting t1/2, V'c, and bioavailability numerically in the abstract; CL not explicitly given. |
| `Hatfield_2001.pdf` | Hatfield CL et al., Pharmacokinetics and toxic effects of l…, American journal of veterin… (2001) | popPK | 8 | [10.2460/ajvr.2001.62.1387](https://doi.org/10.2460/ajvr.2001.62.1387) | [11560265](https://pubmed.ncbi.nlm.nih.gov/11560265) | PK study of LiCl in horses with compartmental model and half-life reported, but CL/V values are not explicitly given in the evidence. |

<sub>queue written 2026-10-07 22:46 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bolognini_2013 | irrelevant | 0 | 0 | Lithium chloride is only used as an emetic/nausea-inducing agent in a pharmacology study of CBDA, with no PK parameters for lithium reported. |
| popPK | Burgdorf_2001 | irrelevant | 0 | 0 | Behavioral study of conditioned aversion in rats; no PK parameters for lithium chloride reported. |
| popPK | Frisch_1995 | irrelevant | 0 | 0 | LiCl is used only as an aversion-inducing agent in a behavioral test; no PK parameters are reported. |
| popPK | Luconi_2001 | irrelevant | 0 | 0 | Lithium chloride is only a co-incubation agent in an in-vitro sperm motility assay; no PK parameters for lithium are reported. |
| popPK | López-Meraz_2014 | irrelevant | 0 | 0 | Lithium chloride is only a convulsant/procedure agent in a rat pup behavioral study; no PK parameters reported. |
| popPK | Morrisett_1987 | irrelevant | 1 | 1 | This is a pharmacodynamic seizure study in rats; lithium is a pretreatment, not a PK subject, and no disposition parameters (CL, V, half-life) are reported. |
| popPK | Nonaka_1998 | irrelevant | 0 | 0 | In-vitro mechanistic neuroprotection study with no PK disposition parameters for lithium. |
| popPK | Osborne_1993 | irrelevant | 0 | 0 | Lithium chloride is only used as an in vitro tool (5 mM) in cell signaling experiments; no PK parameters for lithium are reported. |
| PGx | Paha_2026 | not_relevant | 1 | 2 | LiCl is used as an experimental tool in cell models of WDFY3 variants; no pharmacokinetic or pharmacodynamic parameter of lithium is reported as altered by genotype. |
| popPK | Peters_2008 | irrelevant | 0 | 0 | In-vitro embryotoxicity assay with EC50/REP values, no pharmacokinetic disposition parameters for lithium chloride. |
| popPK | Pillai_2003 | irrelevant | 0 | 0 | Lithium chloride is only used as a classical comparator agent for inducing exogastrulation; no PK parameters are reported. |
| PGx | Pisanu_2018 | not_relevant | 3 | 4 | Reports gene associations with clinical lithium response (efficacy), not effects on PK or PD parameters. |
| popPK | Repetto_2001 | irrelevant | 0 | 0 | In-vitro cytotoxicity study in neuroblastoma cells with no pharmacokinetic disposition parameters for lithium chloride. |
| popPK | Sandmann_1991 | irrelevant | 0 | 0 | Lithium chloride is only a co-incubation reagent in an in vitro cell signaling study; no PK parameters for lithium. |
| PGx | Shawahna_2017 | not_relevant | 2 | 3 | Study reports lithium-induced gene expression changes in cell culture, not a gene variant/genotype effect on lithium PK/PD parameters. |
| PGx | Silva_2010 | not_relevant | 0 | 0 | In vitro study of LiCl as Wnt activator in retinoblastoma cell lines; no gene variant/genotype/phenotype effects on lithium PK or PD parameters. |
| PGx | Wang_2025 | not_relevant | 3 | 5 | ApoE4 genotype modifies lithium's cytoprotective (PD) effect on cell viability, but no PK/PD parameters (e.g., EC50, Emax) are modeled or quantified as fitted effect sizes. |
| PGx | Wang_2026 | not_relevant | 2 | 3 | ApoE4 genotype modulates lithium's cytoprotective (PD) effect in vitro, but no PK/PD parameter (e.g., EC50, AUC) is quantified as a genotype-dependent fitted effect. |
| popPK | Yanagita_2009 | irrelevant | 0 | 0 | In-vitro mechanistic study of LiCl effects on sodium channels in bovine chromaffin cells; no PK disposition parameters reported. |
| PGx | Zhang_2025 | not_relevant | 0 | 0 | Lithium chloride is only used to induce the epilepsy model; the studied drug is phenytoin, and effects are environmental (hypoxia), not gene-variant effects on lithium PK/PD. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Blithium_chloride%5D&body=Drug%3A%20lithium_chloride%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_lithium_chloride/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · newest extraction 2026-10-07 22:46 UTC</sub>
