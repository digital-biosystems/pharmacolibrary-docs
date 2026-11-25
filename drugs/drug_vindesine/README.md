<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01C&quot;,&quot;href&quot;:&quot;atc/L01C.md&quot;},{&quot;label&quot;:&quot;vindesine&quot;}]"></div>

# vindesine

- **generic name:** vindesine
- **ATC codes:** `L01CA03`
- **DrugBank:** [DB00309](https://go.drugbank.com/drugs/DB00309) · **PubChem:** [CID 40839](https://pubchem.ncbi.nlm.nih.gov/compound/40839)
- **molar mass:** 753.941 g/mol (C43H55N5O7) — DrugBank
- **groups:** approved, investigational, withdrawn

## About

Vindesine is a semisynthetic vinca alkaloid chemotherapy agent used to treat cancers like leukaemia and lymphoma. The medication is administered as an intravenous injection. Despite initial approval, the drug has been withdrawn from use.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q416660](https://www.wikidata.org/wiki/Q416660), [Wikipedia](https://en.wikipedia.org/wiki/Vindesine?oldid=1332228320) (CC BY-SA 4.0), DrugBank's routes and dosage forms and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| vindesine | parent | 753.941 | C43H55N5O7 | DrugBank | [40839](https://pubchem.ncbi.nlm.nih.gov/compound/40839) | Owellen_1977, Sethi_1984 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="monkey" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (monkey), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">monkey</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub> | [Sethi_1984_reference](drugs/drug_vindesine/Vindesine_Sethi1984_reference.md) | — | 1-compartment (no model) | 1 | Sethi VS et al., Pharmacokinetics of vincristine, vinbla…, Cancer chemotherapy and pha… (1984) | [10.1007/BF00255905](https://doi.org/10.1007/BF00255905) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Nelson_1979_reference](drugs/drug_vindesine/Vindesine_Nelson1979_reference.md) | — | 1-compartment (no model) | 0 | Nelson RL et al., Clinical pharmacokinetics of vindesine, Cancer chemotherapy and pha… (1979) | [10.1007/BF00257188](https://doi.org/10.1007/BF00257188) |
| <span class="pk-rf" hidden data-species="human" data-age="unknown" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub> | [Owellen_1977_reference](drugs/drug_vindesine/Vindesine_Owellen1977_reference.md) | — | 2-compartment (no model) | 5 | Owellen RJ et al., Pharmacokinetics of vindesine and vincr…, Cancer research (1977) | — |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-24 06:15 | 0:03 | 1/2/0 | 0/0/0 | 0/0/0 | 3,694/185 | einfracz / qwen3.8-27b | 0 | 0/0 | 0/0 | 0 |

## Coverage

- **PubMed hits:** 16 matched, 16 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 3  ·  extracted 0  ·  needs review 1  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Ibrahim_2023 | irrelevant | 0 | 0 | The paper is an in-silico molecular docking study on ABCB1 inhibitors and contains no pharmacokinetic data or disposition parameters for vindesine. |
| PGx | Ibrahim_2023 | not_relevant | 0 | 0 | The paper focuses on in-silico screening of ABCB1 inhibitors and binding affinities, not on pharmacogenomic effects of specific gene variants on vindesine pharmacokinetics or pharmacodynamics. |
| popPK | Merighi_2003 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of chemosensitization and multidrug resistance, not a pharmacokinetic study reporting disposition parameters for vindesine. |
| PGx | Merighi_2003 | not_relevant | 0 | 0 | The paper reports on the effect of chemical compounds (pyrazolotriazolopyrimidines) on drug sensitivity, not on the effect of a gene variant/genotype/phenotype. |
| PGx | Nelson_1979 | not_relevant | 0 | 0 | The paper describes the general pharmacokinetics of vindesine in a small cohort of cancer patients but does not report any effects of genetic variants, genotypes, or phenotypes on PK or PD parameters. |
| PGx | Owellen_1977 | not_relevant | 0 | 0 | The paper reports population-level pharmacokinetic parameters for vindesine and vincristine but does not investigate or report any gene variants, genotypes, or pharmacogenomic influences on these parameters. |
| popPK | Sertel_2011 | irrelevant | 0 | 0 | The paper describes molecular docking and cytotoxicity mechanisms of vinca alkaloids and their precursors, not pharmacokinetic parameters. |
| PGx | Sertel_2011 | not_relevant | 1 | 0 | The paper focuses on molecular docking, cytotoxicity, and multidrug resistance (P-gp efflux) of vinca alkaloids, rather than reporting human pharmacogenomic effects on specific pharmacokinetic or pharmacodynamic parameters for vindesine. |
| PGx | Sethi_1984 | not_relevant | 0 | 10 | The paper reports general pharmacokinetics in rhesus monkeys and does not investigate any gene variants or genotypes. |
| popPK | Sinha_2003 | irrelevant | 0 | 0 | The study is a proteomic analysis of in-vitro chemoresistance mechanisms in cell lines and does not report pharmacokinetic parameters. |
| PGx | Sinha_2003 | not_relevant | 0 | 0 | The paper studies protein expression associated with chemoresistance in melanoma cell lines, not pharmacogenomic effects of gene variants on PK/PD parameters. |
| popPK | Takigawa_2008 | irrelevant | 0 | 0 | The paper is a review discussing the mechanism of vinca alkaloids and MDR1 polymorphisms, mentioning only a qualitative correlation with half-life without reporting any quantitative PK parameter values for vindesine. |
| PGx | Takigawa_2008 | not_relevant | 0 | 0 | The text discusses vinca alkaloids generally and MDR1 polymorphisms but does not report specific PK or PD parameters for vindesine, nor does it present data on vincristine or other specific variants relevant to the query. |
| popPK | Toso_1995 | irrelevant | 0 | 0 | The paper is a review of vinorelbine, not vindesine, and does not report quantitative pharmacokinetic parameters for the target drug. |
| PGx | Toso_1995 | not_relevant | 0 | 0 | The paper is a review of vinorelbine and does not report any pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of vindesine. |
| popPK | Tsuruo_1981 | irrelevant | 0 | 0 | The study is an in-vitro assessment of drug sensitivity (cytotoxicity) of tumor cells, not a pharmacokinetic study reporting disposition parameters for vindesine. |
| PGx | Tsuruo_1981 | not_relevant | 2 | 0 | The paper studies drug sensitivity in tumor cell lines and does not investigate the effect of specific gene variants or genotypes on pharmacokinetic or pharmacodynamic parameters. |
| popPK | Zhou-Pan_1993 | irrelevant | 0 | 0 | The study investigates the in-vitro metabolism of vinblastine in human liver microsomes, using vindesine only as an inhibitor for CYP3A4, rather than studying the pharmacokinetics of vindesine itself. |
| PGx | Zhou-Pan_1993 | not_relevant | 0 | 0 | The paper investigates vinblastine metabolism and does not report pharmacogenomic effects on the PK or PD of vindesine. |
| popPK | Zhou_2018 | irrelevant | 1 | 0 | This is a clinical case report describing an adverse drug interaction, not a pharmacokinetic study with quantitative disposition parameters. |
| popPK | Zhu_2014 | irrelevant | 1 | 0 | The paper describes a bioanalytical method and mentions a population PK study in the abstract, but no quantitative PK parameters (CL, V, etc.) are provided in the evidence. |
| PGx | Zhu_2014 | not_relevant | 0 | 0 | The paper describes the development of an HILIC-MS/MS assay and reports population pharmacokinetic parameters for vindesine in a cohort of Chinese Han subjects, but it does not report any pharmacogenomic effects (gene variant/genotype influence) on PK or PD parameters. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bvindesine%5D&body=Drug%3A%20vindesine%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_vindesine/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-24 06:12 UTC</sub>
