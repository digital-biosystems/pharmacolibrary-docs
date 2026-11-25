<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;moroxydine&quot;}]"></div>

# moroxydine

- **generic name:** moroxydine
- **ATC codes:** `J05AX01`
- **DrugBank:** [DB13597](https://go.drugbank.com/drugs/DB13597) · **PubChem:** none
- **molar mass:** 171.204 g/mol (C6H13N5O) — DrugBank
- **groups:** experimental

## About

Moroxydine is an antiviral compound that was originally developed to treat influenza. It remains an experimental agent with potential applications against various RNA and DNA viruses, and has not been authorised for standard clinical use.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q781304](https://www.wikidata.org/wiki/Q781304), [Wikipedia](https://en.wikipedia.org/wiki/Moroxydine?oldid=1384139146) (CC BY-SA 4.0) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| moroxydine | parent | 171.204 | C6H13N5O | DrugBank | — | Liu_2016 |
| moroxydine hydrochloride | metabolite | 207.662 | C6H14ClN5O | PubChem | [76621](https://pubchem.ncbi.nlm.nih.gov/compound/76621) | Liu_2016 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="fish" data-age="unknown" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (fish), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">fish</span><br><sub>blocking: C5 dimension mismatch on a structural parameter — unit dimension conflicts with…</sub> | [Liu_2016_reference](drugs/drug_moroxydine/Moroxydine_Liu2016_reference.md) | — | 1-compartment (no model) | 6 | Liu W et al., Pharmacokinetics and tissue residues of…, Journal of veterinary pharm… (2016) | [10.1111/jvp.12289](https://doi.org/10.1111/jvp.12289) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Barbieri_2018_CLIC1_current](drugs/drug_moroxydine/pd_Barbieri_2018_CLIC1_current.md) | CLIC1-mediated ion current ← moroxydine · inhibition effect | — | Barbieri F et al., Inhibition of Chloride Intracellular Ch…, Frontiers in pharmacology (2018) | [10.3389/fphar.2018.00899](https://doi.org/10.3389/fphar.2018.00899) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Barbieri_2018_GSC_viability](drugs/drug_moroxydine/pd_Barbieri_2018_GSC_viability.md) | glioblastoma stem cell viability ← moroxydine · inhibition effect | — | Barbieri F et al., Inhibition of Chloride Intracellular Ch…, Frontiers in pharmacology (2018) | [10.3389/fphar.2018.00899](https://doi.org/10.3389/fphar.2018.00899) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-24 01:19 | 0:04 | 0/1/0 | 2/0/0 | 0/0/0 | 3,135/164 | einfracz / qwen3.8-27b | 3 | 0/0 | 3/0 | 0 |

## Coverage

- **PubMed hits:** 9 matched, 9 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Kandeel_2021 | irrelevant | 0 | 0 | The paper is a computational docking study for SARS-CoV-2 PLpro and does not report quantitative pharmacokinetic disposition parameters for moroxydine. |
| PGx | Kandeel_2021 | not_relevant | 0 | 0 | The paper discusses in silico docking of moroxydine against SARS-CoV-2 PLpro and does not report any pharmacogenomic effects on its pharmacokinetic or pharmacodynamic parameters. |
| PGx | Liu_2016 | not_relevant | 0 | 0 | The study investigates the effect of water temperature on the pharmacokinetics of moroxydine in fish, not the effect of genetic variants. |
| popPK | Lu_2012 | irrelevant | 0 | 0 | The study is a mechanistic in vitro enzyme inhibition assay of moroxydine complexes, not a pharmacokinetic study. |
| PGx | Lu_2012 | not_relevant | 0 | 0 | The paper investigates the in vitro enzyme inhibition properties of a vanadium complex containing moroxydine as a ligand, not the pharmacogenomics of moroxydine itself. |
| popPK | Riley_1990 | irrelevant | 0 | 0 | This is a review of chromatographic methods for antiviral agents; moroxydine is listed as a drug category but no PK parameters are reported. |
| PGx | Riley_1990 | not_relevant | 0 | 0 | The paper is a review of chromatographic methods for antiviral agents and does not report any pharmacogenomic effects of moroxydine on PK or PD parameters. |
| popPK | Zhou_1997 | irrelevant | 0 | 0 | The paper describes an in-vitro antiviral study measuring effective concentrations against RSV, not the pharmacokinetic disposition of moroxydine. |
| PGx | Zhou_1997 | not_relevant | 0 | 0 | The paper reports antiviral efficacy and dosage of moroxydine against RSV in HeLa cells, with no mention of genetic variants, pharmacogenomics, or specific PK/PD parameters influenced by genotype. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bmoroxydine%5D&body=Drug%3A%20moroxydine%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_moroxydine/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-24 01:18 UTC</sub>
