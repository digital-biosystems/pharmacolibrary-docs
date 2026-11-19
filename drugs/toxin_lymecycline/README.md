<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Lymecycline&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Lymecycline_Schreiner1985_reference&quot;,&quot;label&quot;:&quot;Schreiner_1985_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_lymecycline/Lymecycline_Schreiner1985_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false}]"></div>

# Lymecycline

- **generic name:** Lymecycline
- **T3DB:** [T3D3952](http://www.t3db.ca/toxins/T3D3952) · **DrugBank:** [DB00256](https://go.drugbank.com/drugs/DB00256) · **PubChem:** [CID 24757945](https://pubchem.ncbi.nlm.nih.gov/compound/24757945)
- **groups:** approved, investigational, withdrawn

## About

Lymecycline is a tetracycline broad-spectrum antibiotic marketed by the pharmaceutical company Galderma. It is approximately 5,000 times more soluble than tetracycline base and is unique amongst tetracyclines in that it is absorbed by an active transport process across the intestinal wall, making use of the same fast and efficient mechanism by which carbohydrates are absorbed.

- **Category:** Drug, Synthetic Toxin
- **Route of exposure:** absorption is fast and efficient. Bioavailability is 100% following oral administration.
- **Sources and uses:** For the treatment of infections and to treat acne. It may also be used to treat urinary tract infections, gum disease, and other bacterial infections such as gonorrhea and chlamydia. …
- **Mechanism of toxicity:** Tetracyclines target the 28S small subunit of the mitochondrial ribosome thereby deactivation mitochondrial protein synthesis. As a result tetracyclines are cytotoxic to the most metabolically active cells or tissues including the heart, liver, thymus and bone-marrow.. The likely target of most tetracyclines is the 12S rRNA molecule in the mitochondrial ribosome, which is analogous to the 16S rRNA in bacterial ribosomes.
- **Health effects:** Side effects from normal doses of tetracyclines are relatively minimal, but of particular note is phototoxicity. Tetracylclines increase the risk of sunburn under exposure to light from the sun or other sources. …
- **Treatment:** Drug therapy is discontinued immediately; exchange transfusion may be required to remove the drug. …

<p><small>Toxicology facts: <a href="http://www.t3db.ca/toxins/T3D3952">T3DB T3D3952</a> (free for non-commercial use with attribution), quoted in part; reference markers removed; the description above is T3DB's too.</small></p>

<p><small>Also: CAS 992-21-2 · <a href="https://www.ebi.ac.uk/chebi/searchId.do?chebiId=CHEBI:59040">ChEBI 59040</a></small></p>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| lymecycline | parent | 602.6 | C29H38N4O10 | PubChem | [24757945](https://pubchem.ncbi.nlm.nih.gov/compound/24757945) | Schreiner_1985 |

## Start here

> **Schreiner_1985_reference** — <span class="pk-badge pk-badge--blue">Simulated</span> 8 young healthy volunteers, n = 8. [Run it in the simulator](drugs/toxin_lymecycline/Lymecycline_Schreiner1985_reference.md?tab=Simulation) · [record](drugs/toxin_lymecycline/Lymecycline_Schreiner1985_reference.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="unknown" data-status="Simulated" data-sim="yes"></span><span class="pk-badge pk-badge--blue">Simulated</span> | [Schreiner_1985_reference](drugs/toxin_lymecycline/Lymecycline_Schreiner1985_reference.md) | ▶ model + simulator | retention, 1 pool | 1 | Schreiner A et al., Pharmacokinetics of lymecycline and dox…, Chemotherapy (1985) | [10.1159/000238345](https://doi.org/10.1159/000238345) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=lymecycline).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-15 13:02 | 2:36 | 1/0/0 | 0/0/0 | 0/0/0 | 44,728/2,403 | einfracz / qwen3.8-flash-next | 1 | 0/0 | 1/0 | 0 |

## Coverage

- **PubMed hits:** 17 matched, 17 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 1  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Schreiner_1985.pdf` | Schreiner A et al., Pharmacokinetics of lymecycline and dox…, Chemotherapy (1985) | popPK | 9 | [10.1159/000238345](https://doi.org/10.1159/000238345) | [4028871](https://pubmed.ncbi.nlm.nih.gov/4028871) | The paper reports the serum half-life of lymecycline in humans, which is a quantitative toxicokinetic parameter. |

<sub>queue written 2026-11-15 13:02 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Agwuh_2006 | irrelevant | 2 | 0 | The paper is a general review describing pharmacokinetic characteristics of tetracycline groups but provides no specific numeric kinetic parameters for lymecycline. |
| PGx | Curdová_1976 | not_relevant | 0 | 0 | The paper discusses bacterial biosynthesis of tetracyclines and energy metabolism in Streptomyces, not human pharmacogenomics or PK/PD of lymecycline. |
| popPK | Geng_2022 | irrelevant | 0 | 0 | The paper is an epidemiological exposure study measuring concentrations in urine, not a toxicokinetic study reporting kinetic parameters like half-life or clearance. |
| popPK | Ochsendorf_2006 | irrelevant | 1 | 1 | The paper is a review of clinical efficacy that mentions lymecycline has a longer half-life than tetracycline but provides no specific quantitative kinetic parameters or values for lymecycline. |
| popPK | Ochsendorf_2010 | irrelevant | 2 | 0 | This is a clinical review of acne treatments mentioning lymecycline only qualitatively regarding half-life, with no quantitative toxicokinetic parameters reported in the text. |
| popPK | Shao_2023 | irrelevant | 0 | 0 | The paper is an epidemiological case-control study reporting exposure concentrations and risk associations (odds ratios) for various antibiotics, including lymecycline, but contains no quantitative toxicokinetic parameters (half-life, clearance, volume of distribution, etc.). |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Blymecycline%5D&body=Drug%3A%20lymecycline%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_lymecycline/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-15 13:02 UTC</sub>
