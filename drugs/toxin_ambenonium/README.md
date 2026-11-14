<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Ambenonium&quot;}]"></div>

# Ambenonium

- **generic name:** Ambenonium
- **T3DB:** [T3D2991](http://www.t3db.ca/toxins/T3D2991) · **DrugBank:** [DB01122](https://go.drugbank.com/drugs/DB01122) · **PubChem:** [CID 2131](https://pubchem.ncbi.nlm.nih.gov/compound/2131)
- **groups:** approved, withdrawn

## About

Ambenonium is only found in individuals that have used or taken this drug. It is a cholinesterase inhibitor used in the management of myasthenia gravis. [Wikipedia] Ambenonium exerts its actions against myasthenia gravis by competitive, reversible inhibition of acetylcholinesterase. The disease myasthenia gravis occurs when the body inappropriately produces antibodies against acetylcholine receptors, and thus inhibits proper acetylcholine signal transmission (when acetylcholine binds to acetylcholine receptors of striated muscle fibers, it stimulates those fibers to contract). …

- **Category:** Drug, Synthetic Toxin
- **Route of exposure:** oral - poorly absorbed from the gastrointestinal tract.
- **Sources and uses:** Ambenonium is used to treat muscle weakness due to muscle disease (myasthenia gravis).
- **Mechanism of toxicity:** Ambenonium is a cholinesterase or acetylcholinesterase (AChE) inhibitor. A cholinesterase inhibitor (or 'anticholinesterase') suppresses the action of acetylcholinesterase. …
- **Health effects:** Acute exposure to cholinesterase inhibitors can cause a cholinergic crisis characterized by severe nausea/vomiting, salivation, sweating, bradycardia, hypotension, collapse, and convulsions. Increasing muscle weakness is a possibility and may result in death if respiratory muscles are involved. …
- **Acute toxicity:** LD<sub>50</sub>=150&plusmn;44 mg/kg (orally in mice).

<p><small>Toxicology facts: <a href="http://www.t3db.ca/toxins/T3D2991">T3DB T3D2991</a> (free for non-commercial use with attribution), quoted in part; reference markers removed; the description above is T3DB's too.</small></p>

<p><small>Also: CAS 7648-98-8 · <a href="https://www.ebi.ac.uk/chebi/searchId.do?chebiId=CHEBI:2627">ChEBI 2627</a></small></p>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="rat" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Yamamoto_1996_2_reference](drugs/toxin_ambenonium/Ambenonium_Yamamoto1996v2_reference.md) | — | 1-compartment (no model) | 0 | Yamamoto K et al., Pharmacodynamic analysis of contractile…, Journal of pharmacokinetics… (1996) | [10.1007/BF02353516](https://doi.org/10.1007/BF02353516) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=ambenonium).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| metabolism | blood | `BCHE` inhibitor | DrugBank actor |
| metabolism | liver | `BCHE` inhibitor | DrugBank actor |
| — | blood | `ACHE` inhibitor | DrugBank actor |
| — | neuromuscular junction | `ACHE` inhibitor | DrugBank actor |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-12 19:02 | 0:42 | 0/1/0 | 0/0/0 | 0/0/0 | 16,902/5,236 | ollama / glm-5.3-flash | 0 | 0/0 | 0/0 | 0 |

## Coverage

- **PubMed hits:** 4 matched, 4 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Yamamoto_1996_2.pdf` | Yamamoto K et al., Pharmacodynamic analysis of contractile…, Journal of pharmacokinetics… (1996) | popPK | 8 | [10.1007/BF02353516](https://doi.org/10.1007/BF02353516) | [9044164](https://pubmed.ncbi.nlm.nih.gov/9044164) | PK and pharmacodynamic parameters (Vd 0.4–0.6 L/kg, t1/2, rate constants) are reported for ambenonium in rats, though precise t1/2 values per drug may be in table text. |
| `Yamamoto_1996.pdf` | Yamamoto K et al., Pharmacodynamic analysis of contractile…, Journal of pharmacokinetics… (1996) | pd | 5 | [10.1007/BF02353516](https://doi.org/10.1007/BF02353516) | [9044164](https://www.ncbi.nlm.nih.gov/pubmed/9044164) | metadata signals extractable PD data (pharmacodynamicmodel) |

<sub>queue written 2026-11-12 19:01 UTC</sub>


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bambenonium%5D&body=Drug%3A%20ambenonium%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_ambenonium/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-12 19:01 UTC</sub>
