<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;R05D&quot;,&quot;href&quot;:&quot;atc/R05D.md&quot;},{&quot;label&quot;:&quot;opium alkaloids with morphine&quot;}]"></div>

# opium alkaloids with morphine

- **generic name:** opium alkaloids with morphine
- **ATC codes:** `R05DA05`
- **DrugBank:** not captured · **PubChem:** not captured
- **groups:** not captured

## About

Opium alkaloids with morphine are used as cough suppressants in cough and cold preparations. They are classified under the ATC system for respiratory system use, mainly as non-combination cough remedies.

<small>⚠️ **Unverified** — written by `glm-5.3-flash` from general knowledge (no Wikidata entry found) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| morphine-6-glucuronide | metabolite | 461.467 | C23H27NO9 | PubChem | [5360621](https://pubchem.ncbi.nlm.nih.gov/compound/5360621) | Simons_2023 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>caveat: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.</sub><br><sub>blocking: model_quarantined: Cl, Vd left at base-class defaults</sub> | [Simons_2023_reference](drugs/drug_opium_alkaloids_with_morphine/OpiumAlkaloidsWithMorphine_Simons2023_reference.md) | held back | 1-compartment, IV | 7 (+1 cov.) | Simons P et al., Respiratory Effects of Biased Ligand Ol…, Anesthesiology (2023) | [10.1097/ALN.0000000000004473](https://doi.org/10.1097/ALN.0000000000004473) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Säwe_1981_reference](drugs/drug_opium_alkaloids_with_morphine/OpiumAlkaloidsWithMorphine_Swe1981_reference.md) | — | 1-compartment (no model) | 0 | Säwe J et al., Morphine kinetics in cancer patients, Clinical pharmacology and t… (1981) | [10.1038/clpt.1981.214](https://doi.org/10.1038/clpt.1981.214) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 21:01 | 3:04 | 1/1/0 | 0/0/0 | 0/0/0 | 43,536/4,082 | einfracz / qwen3.8-27b | 2 | 1/1 | 2/0 | 0 |

## Coverage

- **PubMed hits:** 112 matched, 15 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 0  ·  needs_review 1  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Säwe_1981.pdf` | Säwe J et al., Morphine kinetics in cancer patients, Clinical pharmacology and t… (1981) | popPK | 10 | [10.1038/clpt.1981.214](https://doi.org/10.1038/clpt.1981.214) | [7297022](https://pubmed.ncbi.nlm.nih.gov/7297022) | The abstract explicitly reports quantitative pharmacokinetic parameters for morphine, including volume of distribution, clearance, bioavailability, and half-life. |

<sub>queue written 2026-10-07T21:00:46.067878+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Antunes_2020 | irrelevant | 0 | 0 | This is a pharmacodynamic/behavioral study of a spider venom peptide in rats; morphine is only a comparator drug and no pharmacokinetic parameters for morphine are reported. |
| popPK | Blake_1994 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of bupivacaine, with morphine only mentioned as an adjunctive analgesic without quantitative PK parameters reported for it. |
| popPK | Hill_1991 | irrelevant | 1 | 0 | The paper describes a control system for morphine concentration and mentions PK variability, but provides no specific numeric PK parameter values (CL, V, etc.) in the evidence. |
| popPK | Holm_2019 | irrelevant | 1 | 0 | The study focuses on the pharmacokinetics of ticagrelor and its metabolite, using morphine only as a co-administered agent to assess its impact on ticagrelor absorption, and does not provide quantitative PK parameters for morphine itself. |
| popPK | Hurwitz_1988 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of gentamicin in mice where morphine is used as a modulator/co-administered agent, rather than reporting the disposition parameters of morphine itself. |
| popPK | McPhail_2021 | irrelevant | 0 | 0 | This is a narrative review discussing pharmacometric approaches for neonatal opioid withdrawal, reporting no original quantitative PK parameter values for morphine. |
| popPK | Nicholson_2004 | irrelevant | 0 | 0 | The paper is a clinical review of methadone for cancer pain, not a pharmacokinetic study of opium alkaloids/morphine, and contains no quantitative disposition parameters. |
| popPK | Pallasch_1985 | irrelevant | 0 | 0 | The paper compares butorphanol and nalbuphine, mentioning morphine only for equianalgesic comparisons without providing PK parameters for opium alkaloids. |
| popPK | Pöyhiä_1993 | irrelevant | 0 | 0 | The paper is a review of oxycodone, a different opioid, and does not report quantitative PK parameters for opium_alkaloids_with_morphine. |
| popPK | Raffin_1994 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of lidocaine, not opium_alkaloids_with_morphine, which was only used as a comparator for pain relief. |
| popPK | Savarese_1986 | relevant | 4 | 2 | The study is a PK study of morphine in humans, but the evidence only reports qualitative comparisons and relative ratios (e.g., 86% bioavailability, 2x absorption half-life) without providing absolute quantitative parameter values like CL, V, or t1/2. |
| popPK | Steffey_1994 | irrelevant | 4 | 0 | The paper describes a two-compartment morphine PK model but provides no quantitative parameter values (CL, V, etc.) in the evidence. |
| popPK | Walker_1984 | irrelevant | 0 | 0 | The study examines renal physiology and electrolyte excretion following morphine administration, not the pharmacokinetic disposition parameters (clearance, volume, half-life) of the drug itself. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-07 21:00 UTC</sub>
