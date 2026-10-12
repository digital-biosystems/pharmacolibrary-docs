<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V08C&quot;,&quot;href&quot;:&quot;atc/V08C.md&quot;},{&quot;label&quot;:&quot;gadodiamide&quot;}]"></div>

# gadodiamide

- **generic name:** gadodiamide
- **ATC codes:** `V08CA03`
- **DrugBank:** [DB00225](https://go.drugbank.com/drugs/DB00225) · **PubChem:** [CID 24847884](https://pubchem.ncbi.nlm.nih.gov/compound/24847884)
- **molar mass:** 573.66 g/mol (C16H26GdN5O8) — DrugBank
- **groups:** approved, investigational

## About

Gadodiamide is a gadolinium-based contrast agent used to improve the visibility of tissues during magnetic resonance imaging scans. It is an approved medicine and remains in clinical use as an MRI contrast medium.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q72479907](https://www.wikidata.org/wiki/Q72479907) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| gadodiamide | parent | 573.66 | C16H26GdN5O8 | DrugBank | [24847884](https://pubchem.ncbi.nlm.nih.gov/compound/24847884) | Van_1993 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 17:50 | 7:47 | 0/2/1 | 2/0/0 | 0/0/0 | 184,923/19,507 | openai / gpt-6-luna | 7 | 0/3 | 7/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by qwen3.8-27b (partly confirmed, agreement 0.5). The first reading is what the record holds.">cross-check: partial</span><br><sub>blocking: disposition incomplete — no disposition parameter from this paper; review-gap-f…</sub><br><sub>route_to: `human_review`</sub> | [Van_1993_reference](drugs/drug_gadodiamide/Gadodiamide_Van1993_reference.md) | — | 1-compartment (no model) | 3 | Van Wagoner M et al., Gadodiamide injection. First human expe…, Investigative radiology 28… (1993) | — |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by qwen3.8-27b (?, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Jurkiewicz_2022_reference](drugs/drug_gadodiamide/Gadodiamide_Jurkiewicz2022_reference.md) | — | 2-compartment (no model) | 3 | Jurkiewicz E et al., Pharmacokinetics, Safety, and Efficacy…, Investigative radiology (2022) | [10.1097/rli.0000000000000865](https://doi.org/10.1097/rli.0000000000000865) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by qwen3.8-27b (partly confirmed, agreement 0.909). The first reading is what the record holds.">cross-check: partial</span><br><sub>blocking: C9 clearance/volume outside physiological window (implausible magnitude — unit/…</sub><br><sub>route_to: `human_review`</sub> | [Scala_2018_reference](drugs/drug_gadodiamide/Gadodiamide_Scala2018_reference.md) | — | 2-compartment (no model) | 3 | Scala M et al., A Pharmacokinetics, Efficacy, and Safet…, Investigative radiology (2018) | [10.1097/rli.0000000000000412](https://doi.org/10.1097/rli.0000000000000412) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:qwen3.8-27b (not confirmed, agreement 0.5). The first reading is what the record holds.">cross-check: disputed</span> | [Beydemir_2021_PON1](drugs/drug_gadodiamide/pd_Beydemir_2021_PON1.md) | PON1 activity ← gadodiamide · inhibition effect | — | Beydemir Ş et al., Gadolinium-based contrast agents: in vi…, Drug and chemical toxicology (2021) | [10.1080/01480545.2019.1620266](https://doi.org/10.1080/01480545.2019.1620266) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:qwen3.8-27b (?, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span> | [Nikolaou_2004_signal_increase](drugs/drug_gadodiamide/pd_Nikolaou_2004_signal_increase.md) | signal increase ← gadodiamide · direct linear effect | — | Nikolaou K et al., Quantification of pulmonary blood flow…, Investigative radiology (2004) | [10.1097/01.rli.0000133813.22873.47](https://doi.org/10.1097/01.rli.0000133813.22873.47) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=gadodiamide).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 54 matched, 51 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 3  ·  extracted 0  ·  needs_review 1  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Van_1993.pdf` | Van Wagoner M et al., Gadodiamide injection. First human expe…, Investigative radiology 28… (1993) | popPK | 8 | not captured | [8486503](https://pubmed.ncbi.nlm.nih.gov/8486503) | Human gadodiamide PK includes a reported 70-minute half-life, but no compartment-model parameter values are provided. |
| `Liang_2010.pdf` | Liang J et al., Intraindividual in vivo comparison of g…, Investigative radiology (2010) | popPK | 7 | [10.1097/RLI.0b013e3181d54507](https://doi.org/10.1097/RLI.0b013e3181d54507) | [20351653](https://pubmed.ncbi.nlm.nih.gov/20351653) | Beagle DCE-MRI models include gadodiamide, but no numeric model-parameter values are provided in the evidence. |

<sub>queue written 2026-10-07T17:47:13.586393+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bailey_2014 | irrelevant | 0 | 0 | Gadodiamide is used as an imaging agent, while the reported values are water-exchange rates, not gadodiamide disposition parameters. |
| popPK | Bali_2008 | irrelevant | 1 | 0 | Gadodiamide is only an imaging contrast agent; the reported values are pancreatic perfusion, not gadodiamide pharmacokinetic parameters. |
| popPK | Baranyai_2015 | irrelevant | 2 | 1 | This is a chemical dissociation study, not a quantitative PK disposition study; the reported half-life is for complex dissociation. |
| popPK | Baxter_2009 | irrelevant | 0 | 0 | Gadodiamide is only a contrast-agent probe; the reported values are hepatic perfusion parameters, not gadodiamide disposition parameters. |
| popPK | Boesen_2009 | irrelevant | 0 | 0 | Gadodiamide is used only as an MRI contrast agent, and no pharmacokinetic parameters are reported. |
| popPK | Feng_2008 | irrelevant | 1 | 0 | Gadodiamide is a control, and the reported tumor-kinetic values are for other contrast agents. |
| popPK | Fernández-Llaneza_2025 | irrelevant | 0 | 0 | This drug-safety resource reports no quantitative gadodiamide pharmacokinetic parameters. |
| popPK | Gallitto_2025 | irrelevant | 0 | 0 | This study investigates napabucasin, not gadodiamide, and reports no gadodiamide pharmacokinetic parameters. |
| popPK | Hope_2009 | irrelevant | 1 | 0 | This rat toxicity study reports no quantitative gadodiamide disposition parameters. |
| popPK | Hope_2013 | irrelevant | 0 | 0 | Gadodiamide is used to induce disease, and no quantitative pharmacokinetic disposition parameters are reported. |
| popPK | Jansen_2009 | irrelevant | 2 | 8 | The numeric values describe DCE-MRI tissue uptake, not gadodiamide systemic disposition parameters. |
| popPK | Jurkiewicz_2022 | irrelevant | 0 | 0 | The paper reports quantitative population-PK parameters for gadopiclenol, not gadodiamide. |
| popPK | Liang_2010 | relevant | 7 | 0 | Beagle DCE-MRI models include gadodiamide, but no numeric model-parameter values are provided in the evidence. |
| popPK | Marie_2018 | irrelevant | 0 | 0 | The study reports MRI signal-intensity changes, not quantitative gadodiamide pharmacokinetic parameters. |
| popPK | Nikolaou_2004 | irrelevant | 1 | 0 | The compartment model estimates pulmonary blood flow and volume, not gadodiamide disposition parameters. |
| popPK | Scala_2018 | irrelevant | 0 | 0 | The reported PK parameters are for gadoterate meglumine, not gadodiamide. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 17:47 UTC</sub>
