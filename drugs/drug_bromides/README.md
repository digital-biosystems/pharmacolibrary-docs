<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05C&quot;,&quot;href&quot;:&quot;atc/N05C.md&quot;},{&quot;label&quot;:&quot;bromides&quot;}]"></div>

# bromides

- **generic name:** bromides
- **ATC codes:** `N05CM11`
- **DrugBank:** none · **PubChem:** none
- **groups:** not captured

## About

Bromides were once used as sedatives and hypnotics to calm patients and treat nervous disorders. They are no longer used in human medicine because long-term use caused bromism, a toxic build-up leading to neurological and skin problems.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q422423](https://www.wikidata.org/wiki/Q422423) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Fojtášková_2020_EC50_Vibrio_fischeri](drugs/drug_bromides/pd_Fojt_kov_2020_EC50_Vibrio_fischeri.md) | Luminescence inhibition of Vibrio fischeri (acute toxicity) ← bromide ionic liquids ([C4MIM][Br], [N2224][Br], [N2228][Br], [N222,12][Br]) · inhibition effect | — | Fojtášková J et al., Antibacterial, Antifungal and Ecotoxic…, Molecules (Basel, Switzerla… (2020) | [10.3390/molecules25215181](https://doi.org/10.3390/molecules25215181) |
| <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Fojtášková_2020_Inhibition](drugs/drug_bromides/pd_Fojt_kov_2020_Inhibition.md) | Inhibition of Bacillus subtilis growth ← [N222,12][Br] (dodecyltriethylammonium bromide) · direct sigmoid Emax (Hill) effect | — | Fojtášková J et al., Antibacterial, Antifungal and Ecotoxic…, Molecules (Basel, Switzerla… (2020) | [10.3390/molecules25215181](https://doi.org/10.3390/molecules25215181) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 19:43 | 0:33 | 0/0/0 | 0/1/0 | 0/0/0 | 60,962/1,920 | ollama / glm-5.3-flash | 2 | 0/2 | 2/0 | 0 |

## Coverage

- **PubMed hits:** 8 matched, 8 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Biczak_2020 | irrelevant | 0 | 0 | This is a plant phytotoxicity/ecotoxicology study of ionic liquid bromides in cucumber seedlings, with no pharmacokinetic disposition parameters (CL, V, half-life, PK model) for bromides. |
| popPK | Fojtášková_2020 | irrelevant | 0 | 0 | This is a chemistry/ecotoxicity study of ionic liquid synthesis; "bromides" are only counterions/precursors, with no pharmacokinetic parameters for bromide as a drug. |
| popPK | Hou_2016 | irrelevant | 0 | 0 | This is a medicinal chemistry/SAR paper on antifungal β-carboline salts; "bromides" refers only to counterions, with no pharmacokinetic parameters reported. |
| popPK | Nordeman_2012 | irrelevant | 0 | 0 | This is a synthetic chemistry paper about aryl bromides as substrates, not pharmacokinetics of the drug bromide. |
| popPK | Novikov_2010 | irrelevant | 0 | 0 | This is a chemistry/antiviral synthesis paper; "bromides" appear only as synthetic reagents, with no pharmacokinetic parameters for bromide as a drug. |
| popPK | Rastegari_2009 | irrelevant | 0 | 0 | This is an in-vitro surfactant–enzyme binding study; alkyl trimethyl ammonium bromides are surfactants, not the drug bromide, and no PK parameters exist. |
| popPK | Yang_2015 | irrelevant | 0 | 0 | This is a synthetic chemistry/antifungal SAR study; "bromides" refers to chemical salt forms, not the drug bromide, and no PK parameters are reported. |
| popPK | el-Sabbagh_2009 | irrelevant | 0 | 0 | This is a chemistry/antiviral synthesis paper; "bromides" refers only to reagents (phenacyl bromides), with no pharmacokinetic data. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bbromides%5D&body=Drug%3A%20bromides%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_bromides/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09</sub>
