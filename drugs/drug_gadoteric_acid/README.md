<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V08C&quot;,&quot;href&quot;:&quot;atc/V08C.md&quot;},{&quot;label&quot;:&quot;gadoteric acid&quot;}]"></div>

# gadoteric acid

- **generic name:** gadoteric acid
- **ATC codes:** `V08CA02`
- **DrugBank:** [DB09132](https://go.drugbank.com/drugs/DB09132) · **PubChem:** [CID 158536](https://pubchem.ncbi.nlm.nih.gov/compound/158536)
- **molar mass:** 558.65 g/mol (C16H25GdN4O8) — DrugBank
- **groups:** approved, investigational

## About

Gadoteric acid is a paramagnetic contrast agent used to improve the visibility of tissues in magnetic resonance imaging scans. It is an approved medicine and is used in clinical practice as an MRI contrast medium.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q1490905](https://www.wikidata.org/wiki/Q1490905) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| gadolinium | metabolite | 157.25 | Gd | PubChem | [23982](https://pubchem.ncbi.nlm.nih.gov/compound/23982) | Mühler_2011 |
| gadoteric_acid (gadoteric acid) | metabolite | 558.65 | C16H25GdN4O8 | DrugBank | [158536](https://pubchem.ncbi.nlm.nih.gov/compound/158536) | Mühler_2011, Scala_2018 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="mouse" data-age="unknown" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub> | [Mühler_2011_reference](drugs/drug_gadoteric_acid/GadotericAcid_Mhler2011_reference.md) | — | 1-compartment (no model) | 2 | Mühler MR et al., Maternofetal pharmacokinetics of a gado…, Radiology (2011) | [10.1148/radiol.10100652](https://doi.org/10.1148/radiol.10100652) |
| <span class="pk-rf" hidden data-species="human" data-age="paediatric" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: C9 clearance/volume outside physiological window (implausible magnitude — unit/…</sub> | [Scala_2018_reference](drugs/drug_gadoteric_acid/GadotericAcid_Scala2018_reference.md) | — | 1-compartment (no model) | 7 | Scala M et al., A Pharmacokinetics, Efficacy, and Safet…, Investigative radiology (2018) | [10.1097/RLI.0000000000000412](https://doi.org/10.1097/RLI.0000000000000412) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 0.00).">in vitro</span> | [Beydemir_2021_PON1](drugs/drug_gadoteric_acid/pd_Beydemir_2021_PON1.md) | PON1 activity ← gadoteric acid · inhibition effect | — | Beydemir Ş et al., Gadolinium-based contrast agents: in vi…, Drug and chemical toxicology (2021) | [10.1080/01480545.2019.1620266](https://doi.org/10.1080/01480545.2019.1620266) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">in vitro</span> | [Bilgin_2025_cell_viability](drugs/drug_gadoteric_acid/pd_Bilgin_2025_cell_viability.md) | cell viability ← Gadoteric acid · inhibition effect | — | Bilgin B et al., Cytogenotoxic Activity of Gadoteric Aci…, Journal of applied toxicolo… (2025) | [10.1002/jat.4884](https://doi.org/10.1002/jat.4884) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">in vitro</span> | [Kenger_2026_cell_viability](drugs/drug_gadoteric_acid/pd_Kenger_2026_cell_viability.md) | cell viability ← gadoteric acid · inhibition effect | — | Kenger İH, Gadoteric Acid Induces Dose-Dependent D…, Basic & clinical pharmacolo… (2026) | [10.1111/bcpt.70150](https://doi.org/10.1111/bcpt.70150) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=gadoteric_acid).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 18:38 | 12:00 | 0/2/0 | 3/0/0 | 0/0/0 | 176,516/39,024 | openai / gpt-6-luna | 8 | 0/6 | 8/0 | 0 |

## Coverage

- **PubMed hits:** 44 matched, 43 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 0  ·  needs review 0  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Mühler_2011.pdf` | Mühler MR et al., Maternofetal pharmacokinetics of a gado…, Radiology (2011) | popPK | 8 | [10.1148/radiol.10100652](https://doi.org/10.1148/radiol.10100652) | [21045181](https://pubmed.ncbi.nlm.nih.gov/21045181) | Mouse tissue-compartment kinetics report numerical half-lives and fetal gadolinium concentrations. |

<sub>queue written 2026-10-07 18:32 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Annet_2004 | irrelevant | 1 | 0 | Gadoterate is used as an MRI contrast agent to estimate GFR, not studied for its own disposition parameters. |
| popPK | Autio_2020 | irrelevant | 1 | 0 | The quantitative kinetic model is for 68Ga-DOTA, not gadoteric acid; no gadoteric-acid parameters are reported. |
| popPK | Curry_2019 | irrelevant | 2 | 7 | Dotarem is used as a diagnostic tracer; numeric exchange/permeability values are present, but not systemic disposition parameters. |
| popPK | Cyran_2008 | irrelevant | 0 | 0 | This rat imaging study reports tumor vascular permeability for macromolecular Gd-DOTA agents, not gadoteric_acid disposition parameters. |
| popPK | Cyran_2013 | irrelevant | 0 | 0 | The study measures tumor permeability using macromolecular Gd-DOTA agents, not gadoteric acid disposition parameters. |
| popPK | Delrue_2011 | irrelevant | 1 | 1 | Gadoteric acid is a DCE-MRI contrast-agent comparator, and no numeric disposition parameters are provided. |
| popPK | Deng_2012 | irrelevant | 1 | 0 | The study reports disc-enhancement measures, not quantitative pharmacokinetic disposition parameters for gadoteric acid. |
| popPK | Guenther_2025 | irrelevant | 1 | 0 | The quantitative PK values are for gadoquatrane; gadoterate is only a co-injected lanthanide analog comparator. |
| popPK | Guidolin_2020 | irrelevant | 1 | 0 | This is an in-vitro collagen interaction study, not a quantitative pharmacokinetic study, and no numeric disposition parameters are provided. |
| popPK | Hindel_2017 | irrelevant | 1 | 0 | Gadoteric acid is used as a diagnostic tracer to estimate tissue blood volume, not to report its quantitative disposition parameters. |
| popPK | Kang_2017 | irrelevant | 0 | 0 | Ex vivo porcine cartilage imaging compares contrast agents but reports no gadoteric acid disposition parameters. |
| popPK | Kero_2026 | irrelevant | 2 | 0 | This is a diagnostic MBF study, and the reported numeric K1 values are for the 68Ga-DOTA analog, not gadoteric acid. |
| PGx | Kim_2020 | not_relevant | 0 | 0 | The TSPO variant is evaluated for CB251 binding, while gadoteric acid is mentioned only as a contrast agent for MRI; no genotype effect on its PK or PD is reported. |
| popPK | Kramer_2013 | irrelevant | 0 | 0 | Gadoterate meglumine is only an imaging-agent comparator, and no pharmacokinetic disposition parameters are reported. |
| popPK | Materne_2002 | irrelevant | 1 | 1 | The reported values are hepatic perfusion parameters, not gadoteric acid disposition parameters. |
| popPK | Michoux_2008 | irrelevant | 2 | 0 | Gadoterate is used as an MRI contrast probe, and no numeric disposition parameter values are reported. |
| popPK | Perles-Barbacaru_2007 | irrelevant | 0 | 0 | Gadoteric acid (Gd-DOTA) is used as an MRI contrast agent, with no quantitative pharmacokinetic disposition parameters reported. |
| popPK | Pozeg_2019 | irrelevant | 0 | 0 | This human MRI study reports brain signal changes, not quantitative pharmacokinetic disposition parameters. |
| popPK | Preda_2005 | irrelevant | 0 | 0 | This rat tumor-imaging study uses a distinct Gd-DOTA contrast agent and reports no numeric gadoteric_acid disposition parameters. |
| popPK | Sarraf_2015 | irrelevant | 1 | 0 | Reports tumor blood-volume estimates, not gadoteric-acid disposition parameters. |
| popPK | Towbin_2021 | irrelevant | 0 | 0 | This study measures brain signal changes, not quantitative pharmacokinetic parameters for gadoterate meglumine. |
| PGx | Yang_2018 | not_relevant | 0 | 0 | The paper studies engineered bacterial-channel variants and Gd-DOTA release, not a pharmacogenomic effect on a pharmacokinetic or pharmacodynamic parameter of gadoteric acid. |
| popPK | Zhang_2009 | irrelevant | 0 | 0 | Gd-DOTA is used only as an MRI contrast agent, and the reported values are tissue perfusion indices rather than pharmacokinetic parameters. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bgadoteric_acid%5D&body=Drug%3A%20gadoteric_acid%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_gadoteric_acid/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · newest extraction 2026-10-07 18:32 UTC</sub>
