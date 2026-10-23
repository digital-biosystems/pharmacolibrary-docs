<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;G04B&quot;,&quot;href&quot;:&quot;atc/G04B.md&quot;},{&quot;label&quot;:&quot;dimethyl sulfoxide&quot;}]"></div>

# dimethyl sulfoxide

- **generic name:** dimethyl sulfoxide
- **ATC codes:** `G04BX13`, `M02AX03`
- **DrugBank:** [DB01093](https://go.drugbank.com/drugs/DB01093) · **PubChem:** [CID 679](https://pubchem.ncbi.nlm.nih.gov/compound/679)
- **molar mass:** 78.133 g/mol (C2H6OS) — DrugBank
- **groups:** approved, investigational, vet_approved

## About

Dimethyl sulfoxide is used topically for joint and muscle pain and for certain bladder conditions, and also serves as a solvent and cryoprotectant. It is an approved medicine and also approved for veterinary use, with some investigational applications.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q407927](https://www.wikidata.org/wiki/Q407927) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| dimethyl sulfoxide (dimethyl_sulfoxide) | parent | 78.133 | C2H6OS | DrugBank | [679](https://pubchem.ncbi.nlm.nih.gov/compound/679) | Soma_2018 |

## Parameters across studies

| parameter | as named | value | unit | as reported | population | species | status | record |
|---|---|---|---|---|---|---|---|---|
| CL | CL | 16.17 ‡ | L/h | 231 ml/h/kg | horses | horse | <span class="pk-badge pk-badge--orange">Needs review</span> | [Soma_2018_reference](drugs/drug_dimethyl_sulfoxide/DimethylSulfoxide_Soma2018_reference.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. ‡ given per kg in the paper; shown for a 70 kg adult. Rejected records are left out.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="horse" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (horse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">horse</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>blocking: C6_cl_magnitude failed (ratio None)</sub> | [Soma_2018_reference](drugs/drug_dimethyl_sulfoxide/DimethylSulfoxide_Soma2018_reference.md) | — | 1-compartment (no model) | 1 | Soma LR et al., Pharmacokinetics, disposition, and plas…, Journal of veterinary pharm… (2018) | [10.1111/jvp.12476](https://doi.org/10.1111/jvp.12476) |
| <span class="pk-rf" hidden data-species="fish" data-age="unknown" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (fish), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">fish</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Hagedorn_1998_reference](drugs/drug_dimethyl_sulfoxide/DimethylSulfoxide_Hagedorn1998_reference.md) | — | 1-compartment (no model) | 0 | Hagedorn M et al., Characterization of a major permeabilit…, Biology of reproduction (1998) | [10.1095/biolreprod59.5.1240](https://doi.org/10.1095/biolreprod59.5.1240) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=dimethyl_sulfoxide).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| metabolism | brain | `CYP2D6` inhibitor | DrugBank actor |
| metabolism | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| metabolism | liver | `CYP2C19` inhibitor, `CYP2D6` inhibitor, `CYP3A4` inhibitor | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inhibitor | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: IL5RA (downregulator), MUC16 (downregulator), MYC (downregulator), TTR (unknown).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 09:21 | 2:52 | 1/1/0 | 0/0/0 | 0/0/0 | 167,184/6,416 | einfracz / qwen3.8-27b | 5 | 2/3 | 5/0 | 0 |

## Coverage

- **PubMed hits:** 73 matched, 18 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 0  ·  needs_review 1  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Hagedorn_1998.pdf` | Hagedorn M et al., Characterization of a major permeabilit…, Biology of reproduction (1998) | popPK | 5 | [10.1095/biolreprod59.5.1240](https://doi.org/10.1095/biolreprod59.5.1240) | [9780333](https://pubmed.ncbi.nlm.nih.gov/9780333) | The study reports quantitative permeability parameters (analogous to rate constants) for DMSO uptake in zebrafish using compartmental models. |

<sub>queue written 2026-10-07T09:19:32.715656+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Ackermann_1998 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of 5-aminolaevulinic acid (ALA) and its metabolite protoporphyrin IX, where dimethyl sulfoxide is mentioned only as an ingredient in a gel formulation. |
| popPK | Climacosa_2020 | irrelevant | 0 | 0 | Dimethyl sulfoxide is used only as a solvent for peptide synthesis, not as the subject drug in a pharmacokinetic study. |
| popPK | Eljack_2022 | irrelevant | 0 | 0 | The paper is a review on nanotechnology for chemoresistance reversal, and dimethyl sulfoxide is mentioned only as a solvent for drug loading, not as a subject of pharmacokinetic study. |
| popPK | Hagedorn_1997 | irrelevant | 1 | 1 | The study investigates DMSO as a cryoprotectant for permeability in fish embryos, not its pharmacokinetic disposition parameters. |
| popPK | He_2004 | irrelevant | 0 | 0 | The paper studies membrane transport properties and freezing rates of oyster sperm using DMSO as a cryoprotectant, not the pharmacokinetics of dimethyl sulfoxide. |
| popPK | Kramer_2010 | irrelevant | 0 | 0 | The paper focuses on the pharmacokinetics of toxicants (benzo(a)pyrene, etc.) in cell assays, using DMSO only as a carrier solvent/comparator rather than as the subject drug for PK parameter estimation. |
| popPK | Kurihara-Bergstrom_1986 | irrelevant | 0 | 0 | The study focuses on the physicochemical properties of DMSO as a penetration enhancer for alkanols in vitro (diffusion cells), not on the pharmacokinetic disposition (CL, V, etc.) of DMSO itself. |
| popPK | Mamo_2024 | irrelevant | 0 | 0 | The study compares DMSO-containing and DMSO-free cryoprotectant solutions for mesenchymal stem cells and does not report any pharmacokinetic parameters for DMSO. |
| popPK | Okamura_2006 | irrelevant | 0 | 0 | The study investigates the photodegradation and toxicity of zinc and copper pyrithiones, using dimethyl sulfoxide only as a solvent for bioassays, and reports no pharmacokinetic parameters for DMSO. |
| popPK | Pham_2024 | irrelevant | 0 | 0 | The paper is a quantum chemical and in-vitro study of rutin-beta-cyclodextrin complexes, where dimethyl sulfoxide is only mentioned as a solvent in theoretical calculations, not as a subject of pharmacokinetic analysis. |
| popPK | Rosell-Valle_2021 | irrelevant | 0 | 0 | The paper describes a cryopreservation system using DMSO as a cryoprotectant, not the pharmacokinetics of DMSO. |
| popPK | Simões-Silva_2016 | irrelevant | 0 | 0 | The paper is an in vitro pharmacological study of amidines against Trypanosoma cruzi, where dimethyl sulfoxide is only mentioned as a vehicle/solvent, not as the subject of PK analysis. |
| popPK | Wise_1996 | irrelevant | 0 | 0 | DMSO is used only as a differentiating agent for cell lines, and the study measures neutrophil activation, not DMSO pharmacokinetics. |
| popPK | Zheng_2018 | irrelevant | 0 | 0 | The study is an in vitro toxicity assessment of cryoprotectants on oyster sperm motility, not a pharmacokinetic study, and does not report any PK parameters for dimethyl sulfoxide. |
| popPK | de-Carvalho_2022 | irrelevant | 0 | 0 | This is an ecotoxicology study measuring embryotoxicity and teratogenicity in snails, not a pharmacokinetic study reporting disposition parameters for dimethyl sulfoxide. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-07 09:19 UTC</sub>
