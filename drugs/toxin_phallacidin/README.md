<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Fungal toxins&quot;,&quot;href&quot;:&quot;toxins/FUNG.md&quot;},{&quot;label&quot;:&quot;Phallacidin&quot;}]"></div>

# Phallacidin

- **generic name:** Phallacidin
- **T3DB:** [T3D2471](http://www.t3db.ca/toxins/T3D2471) · **PubChem:** [CID 44134886](https://pubchem.ncbi.nlm.nih.gov/compound/44134886)

## About

Phallacidin is one of a group of toxins from the death cap (Amanita phalloides) known as phallotoxins. The phallotoxins consist of at least seven compounds, all of which have seven similar peptide rings, isolated from the death cap (Amanita phalloides).

- **Category:** Protein, Fungal Toxin, Natural Toxin
- **Route of exposure:** oral, dermal, inhalation, and parenteral (contaminated drugs).
- **Sources and uses:** Phallisin is one of a group of toxins from the death cap (Amanita phalloides) known as phallotoxins.
- **Mechanism of toxicity:** Phallotoxins bind actin, preventing its depolymerization and poisoning the cell. They bind specifically at the interface between F-actin subunits, locking adjacent subunits together. …
- **Health effects:** Liver lesions, tachycardia, hypoglycemia, hypotension and electrolyte imbalance with acid- base disturbance.
- **Acute toxicity:** LD50: 1.5 mg/kg (Mouse)
- **Treatment:** Consider gastric lavage and activated charcoal.

<p><small>Toxicology facts: <a href="http://www.t3db.ca/toxins/T3D2471">T3DB T3D2471</a> (free for non-commercial use with attribution), quoted in part; reference markers removed; the description above is T3DB's too.</small></p>

<p><small>Also: CAS 26645-35-2 · <a href="https://www.ebi.ac.uk/chebi/searchId.do?chebiId=CHEBI:52732">ChEBI 52732</a></small></p>

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
| 2026-11-18 20:09 | 2:50 | 0/0/0 | 0/0/0 | 0/0/0 | 31,971/2,359 | einfracz / qwen3.8-flash-next | 0 | 0/0 | 0/0 | 0 |

## Coverage

- **PubMed hits:** 9 matched, 9 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Sun_2018.pdf` | Sun J et al., Toxicity and toxicokinetics of Amanita…, Toxicon : official journal… (2018) | popPK | 7 | [10.1016/j.toxicon.2018.01.008](https://doi.org/10.1016/j.toxicon.2018.01.008) | [29341897](https://pubmed.ncbi.nlm.nih.gov/29341897) | The paper discusses the toxicokinetics of phallacidin in beagle dogs, noting rapid absorption/elimination and urine excretion &gt;90% in 2 days, but no specific numeric parameters (half-lives, clearance, etc.) are present in the provided abstract/text. |

<sub>queue written 2026-11-18 20:09 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bertorello_1999 | irrelevant | 0 | 0 | Phallacidin is used solely as a pharmacological tool to stabilize actin cytoskeleton in an in vitro cell study of Na+-K+-ATPase, with no toxicokinetic parameters reported. |
| popPK | Eberle_1990 | irrelevant | 0 | 0 | Phallacidin is used only as an analytical stain (NBD-phallacidin) to detect actin, with no toxicokinetic parameters reported for phallacidin itself. |
| popPK | Harris_1993 | irrelevant | 0 | 0 | The paper uses phallacidin merely as an analytical fluorescent stain (NBD-phallacidin) to quantify actin; it does not report any toxicokinetic parameters for phallacidin itself. |
| popPK | Laudadio_2005 | irrelevant | 0 | 0 | The paper studies cytoskeletal mechanics and rheology of rat airway smooth muscle cells; phallacidin is used merely as an actin cross-linking agent to modulate stiffness, with no toxicokinetic parameters or kinetic data reported. |
| popPK | Oda_1992 | irrelevant | 0 | 0 | The paper uses phallacidin only as a fluorescent analytical probe (reagent) to measure actin content in platelets, providing no toxicokinetic parameters for the substance itself. |
| popPK | Phillips_1989 | irrelevant | 0 | 0 | The paper uses NBD-phallacidin as a mechanistic tool to stabilize actin filaments in an in vitro cell culture assay and does not report any quantitative toxicokinetic parameters for phallacidin. |
| popPK | Rao_1992 | irrelevant | 0 | 0 | Phallacidin is used solely as an analytical reagent (NBD-phallacidin) to label actin in cells, with no kinetic parameters reported for the substance itself. |
| popPK | Sun_2018 | relevant | 7 | 2 | The paper discusses the toxicokinetics of phallacidin in beagle dogs, noting rapid absorption/elimination and urine excretion &gt;90% in 2 days, but no specific numeric parameters (half-lives, clearance, etc.) are present in the provided abstract/text. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bphallacidin%5D&body=Drug%3A%20phallacidin%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_phallacidin/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>
