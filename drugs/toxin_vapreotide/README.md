<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Vapreotide&quot;}]"></div>

# Vapreotide

- **generic name:** Vapreotide
- **T3DB:** [T3D3067](http://www.t3db.ca/toxins/T3D3067) · **DrugBank:** [DB04894](https://go.drugbank.com/drugs/DB04894) · **PubChem:** [CID 23725064](https://pubchem.ncbi.nlm.nih.gov/compound/23725064)
- **groups:** investigational

## About

Vapreotide is only found in individuals that have used or taken this drug. It is a synthetic octapeptide somatostatin analog. It was being studied for the treatment of cancer.The exact mechanism of action is unknown, although one study has provided in vitro and in vivo evidence for a tachykinin NK1 receptor antagonist effect in the analgesic effects of vapreotide.

- **Category:** Drug, Synthetic Toxin
- **Sources and uses:** For the treatment of esophageal variceal bleeding in patients with cirrhotic liver disease and has also shown efficacy in the treatment of patients with AIDS-related diarrhea.
- **Mechanism of toxicity:** The exact mechanism of action is unknown, although one study has provided in vitro and in vivo evidence for a tachykinin NK1 receptor antagonist effect in the analgesic effects of vapreotide.

<p><small>Toxicology facts: <a href="http://www.t3db.ca/toxins/T3D3067">T3DB T3D3067</a> (free for non-commercial use with attribution), quoted in part; reference markers removed; the description above is T3DB's too.</small></p>

<p><small>Also: CAS 103222-11-3</small></p>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="unknown" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Breeman_1998_reference](drugs/toxin_vapreotide/Vapreotide_Breeman1998_reference.md) | — | 1-compartment (no model) | 0 | Breeman WA et al., Somatostatin receptor scintigraphy usin…, European journal of nuclear… (1998) | [10.1007/s002590050213](https://doi.org/10.1007/s002590050213) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=vapreotide).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | `CYP3A4` inhibitor | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inhibitor | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: SSTR2 (inducer), SSTR5 (target), TACR1 (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-13 12:37 | 1:26:48 | 0/1/0 | 0/0/0 | 0/0/0 | 36,047/3,121 | einfracz / qwen3.8-flash-next | 1 | 0/0 | 1/0 | 0 |

## Coverage

- **PubMed hits:** 9 matched, 9 returned
- **screened:** 4  ·  **relevant:** 3
- **records:** 1  ·  extracted 0  ·  needs review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_4 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Blanco-Príeto_1999.pdf` | Blanco-Príeto MJ et al., Importance of the test medium for the r…, International journal of ph… (1999) | popPK | 9 | [10.1016/s0378-5173(99)00118-0](https://doi.org/10.1016/s0378-5173(99)00118-0) | [10387954](https://pubmed.ncbi.nlm.nih.gov/10387954) | The paper reports quantitative in vitro release kinetics (solubility, % release over time) and mentions in vivo rat release/pharmacokinetics as the subject substance's kinetic parameters. |
| `Breeman_1998.pdf` | Breeman WA et al., Somatostatin receptor scintigraphy usin…, European journal of nuclear… (1998) | popPK | 9 | [10.1007/s002590050213](https://doi.org/10.1007/s002590050213) | [9473268](https://pubmed.ncbi.nlm.nih.gov/9473268) | The paper reports quantitative kinetic data (plasma clearance, urinary/fecal excretion percentages) for RC-160 (vapreotide) radiolabeled with Indium-111 in humans. |
| `Schuetz_2005.pdf` | Schuetz YB et al., Transdermal iontophoretic delivery of v…, Pharmaceutical research (2005) | popPK | 7 | [10.1007/s11095-005-5276-6](https://doi.org/10.1007/s11095-005-5276-6) | [16078140](https://pubmed.ncbi.nlm.nih.gov/16078140) | The study reports the transdermal flux of vapreotide across porcine skin, which constitutes a permeability/transport parameter relevant to kinetic modeling. |
| `Froidevaux_2000.pdf` | Froidevaux S et al., Preclinical comparison in AR4-2J tumor-…, Endocrinology (2000) | popPK | 6 | [10.1210/endo.141.9.7683](https://doi.org/10.1210/endo.141.9.7683) | [10965902](https://pubmed.ncbi.nlm.nih.gov/10965902) | The paper compares vapreotide derivatives in mice regarding biodistribution and clearance, implying kinetic data, but the specific numeric parameters (rates, clearances) are not explicitly listed in the provided text summary. |

<sub>queue written 2026-11-13 11:13 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abdellatif_2020 | irrelevant | 0 | 0 | Vapreotide is used only as a targeting ligand on quantum dots, and no kinetic parameters for vapreotide itself are reported. |
| popPK | Banks_1990 | irrelevant | 0 | 0 | The paper investigates RC-160, RC-121, and RC-161 (somatostatin octapeptide analogs), not vapreotide (RC-192). |
| popPK | Froidevaux_2000 | relevant | 6 | 1 | The paper compares vapreotide derivatives in mice regarding biodistribution and clearance, implying kinetic data, but the specific numeric parameters (rates, clearances) are not explicitly listed in the provided text summary. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bvapreotide%5D&body=Drug%3A%20vapreotide%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_vapreotide/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-13 11:13 UTC</sub>
