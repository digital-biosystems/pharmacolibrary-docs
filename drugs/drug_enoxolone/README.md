<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D03A&quot;,&quot;href&quot;:&quot;atc/D03A.md&quot;},{&quot;label&quot;:&quot;enoxolone&quot;}]"></div>

# enoxolone

- **generic name:** enoxolone
- **ATC codes:** `D03AX10`
- **DrugBank:** [DB13089](https://go.drugbank.com/drugs/DB13089) · **PubChem:** [CID 10114](https://pubchem.ncbi.nlm.nih.gov/compound/10114)
- **molar mass:** 470.694 g/mol (C30H46O4) — DrugBank
- **groups:** investigational

## About

Enoxolone is a pentacyclic triterpenoid derivative used as a cicatrizant for wounds and ulcers. The drug is currently classified as investigational.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q5948038](https://www.wikidata.org/wiki/Q5948038), [Wikipedia](https://en.wikipedia.org/wiki/Enoxolone?oldid=1329161073) (CC BY-SA 4.0) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| enoxolone (glycyrrhetic acid (GA; enoxolone)) | parent | 470.694 | C30H46O4 | DrugBank | [10114](https://pubchem.ncbi.nlm.nih.gov/compound/10114) | Lu_2008, Xu_2014 |
| 3MGA | metabolite | 646.818 | C36H54O10 | PubChem | [161800](https://pubchem.ncbi.nlm.nih.gov/compound/161800) | Xu_2014 |
| GAM (phase II metabolites of GA) | metabolite | — (mass units only) | — | — | — | — |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="rat" data-age="unknown" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span><br><sub>blocking: C5 dimension mismatch on a structural parameter — unit dimension conflicts with…</sub> | [Lu_2008_reference](drugs/drug_enoxolone/Enoxolone_Lu2008_reference.md) | — | 1-compartment (no model) | 6 | Lu Y et al., [Study on pharmacokinetics of glycyrrhe…, Zhongguo Zhong yao za zhi =… (2008) | — |
| <span class="pk-rf" hidden data-species="human + animal" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.70).">human + animal</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub> | [Xu_2014_reference](drugs/drug_enoxolone/Enoxolone_Xu2014_reference.md) | — | general linear (no model) | 11 | Xu R et al., A semi-physiologically based pharmacoki…, PloS one (2014) | [10.1371/journal.pone.0114049](https://doi.org/10.1371/journal.pone.0114049) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-23 20:51 | 0:06 | 0/2/0 | 0/0/0 | 0/0/0 | 3,278/159 | einfracz / qwen3.8-27b | 3 | 1/2 | 3/0 | 0 |

## Coverage

- **PubMed hits:** 7 matched, 7 returned
- **screened:** 2  ·  **relevant:** 1
- **records:** 2  ·  extracted 0  ·  needs review 0  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bera_2025 | irrelevant | 0 | 0 | The paper studies the antioxidant and anticancer properties of a fungal extract (Daldinia eschscholtzii) and does not involve the drug enoxolone. |
| PGx | Bera_2025 | not_relevant | 0 | 0 | The paper studies a fungal extract, not enoxolone, and contains no pharmacogenomic analysis. |
| popPK | Ishida_1989 | irrelevant | 0 | 0 | The provided evidence contains only software metadata (GROBID) and no scientific content regarding enoxolone pharmacokinetics. |
| PGx | Ishida_1989 | not_relevant | 0 | 0 | The provided text is GROBID software metadata and does not contain information regarding enoxolone pharmacogenomics. |
| popPK | Lu_2008 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of glycyrrhetic acid in rats, not enoxolone. |
| PGx | Lu_2008 | not_relevant | 0 | 0 | The paper studies the pharmacokinetics of glycyrrhetic acid in rats and does not involve enoxolone or pharmacogenomics. |
| popPK | Peng_2010 | irrelevant | 0 | 0 | The study focuses on prodrugs of 18β-glycyrrhetic acid in rats and does not involve the drug enoxolone. |
| PGx | Peng_2010 | not_relevant | 0 | 0 | The paper studies prodrugs of glycyrrhetic acid in rats, not enoxolone, and does not involve pharmacogenomics. |
| popPK | Ploeger_2001 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of glycyrrhetic acid, not enoxolone. |
| PGx | Ploeger_2001 | not_relevant | 0 | 0 | The paper focuses on glycyrrhetic acid and does not mention enoxolone or any genetic variants affecting its pharmacokinetics or pharmacodynamics. |
| popPK | Rakhimova_2023 | irrelevant | 0 | 0 | The paper studies the effect of glycyrrhetic acid derivatives on thymocyte volume, not the pharmacokinetics of enoxolone. |
| PGx | Rakhimova_2023 | not_relevant | 0 | 0 | The paper discusses glycyrrhetinic acid derivatives, not enoxolone, and does not report pharmacogenomic effects on a PK/PD parameter. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Benoxolone%5D&body=Drug%3A%20enoxolone%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_enoxolone/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-23 20:51 UTC</sub>
