<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;H01A&quot;,&quot;href&quot;:&quot;atc/H01A.md&quot;},{&quot;label&quot;:&quot;somatropin&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Somatropin_van2021_reference&quot;,&quot;label&quot;:&quot;van_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_somatropin/Somatropin_van2021_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# somatropin

- **generic name:** somatropin
- **ATC codes:** `H01AC01`
- **DrugBank:** [DB00052](https://go.drugbank.com/drugs/DB00052) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Somatropin, a recombinant form of human growth hormone, is used to treat growth disorders such as pituitary dwarfism, Turner syndrome, and Prader-Willi syndrome. It is an approved medicine with authorised products in the European Union and is widely used for growth-related conditions.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q19709937](https://www.wikidata.org/wiki/Q19709937) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 09:25 | 3:19 | 0/2/1 | 0/1/0 | 0/0/0 | 207,936/13,484 | einfracz / qwen3.8-27b | 7 | 1/6 | 6/1 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.7). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: unreported model parameter default(s): F</sub><br><sub>route_to: `scholar`</sub> | [van_2021_reference](drugs/drug_somatropin/Somatropin_van2021_reference.md) | ▶ model + simulator | 1-compartment, oral | 3 | van Esdonk MJ et al., The power of modelling pulsatile profil…, Journal of pharmacokinetics… (2021) | [10.1007/s10928-021-09743-2](https://doi.org/10.1007/s10928-021-09743-2) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [González-Sales_2015_reference](drugs/drug_somatropin/Somatropin_GonzlezSales2015_reference.md) | — | 1-compartment (no model) | 0 | González-Sales M et al., Population pharmacokinetic analysis of…, Clinical pharmacokinetics (2015) | [10.1007/s40262-014-0202-x](https://doi.org/10.1007/s40262-014-0202-x) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="a second model re-read this paper; the two readings agree on 0.0 of the compared fields. Primary extraction retained.">cross-check: partial</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Papathanasiou_2021_reference](drugs/drug_somatropin/Somatropin_Papathanasiou2021_reference.md) | — | general linear (no model) | 0 | Papathanasiou T et al., Population Pharmacokinetics and Pharmac…, Clinical pharmacokinetics (2021) | [10.1007/s40262-021-01011-3](https://doi.org/10.1007/s40262-021-01011-3) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.75). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.50).">human + animal</span> | [Thorsted_2016_IGF_1](drugs/drug_somatropin/pd_Thorsted_2016_IGF_1.md) | insulin-like growth factor 1 (IGF-1) ← recombinant human growth hormone · indirect response — drug stimulates the production of insulin-like growth factor 1 (IGF-1) | — | Thorsted A et al., Translational mixed-effects PKPD modell…, British journal of pharmaco… (2016) | [10.1111/bph.13473](https://doi.org/10.1111/bph.13473) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:gpt-oss-120b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.50).">human + animal</span> | [Thorsted_2016_bodyweight_gain](drugs/drug_somatropin/pd_Thorsted_2016_bodyweight_gain.md) | bodyweight gain ← insulin-like growth factor 1 · direct linear effect | — | Thorsted A et al., Translational mixed-effects PKPD modell…, British journal of pharmaco… (2016) | [10.1111/bph.13473](https://doi.org/10.1111/bph.13473) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 243 matched, 20 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 3  ·  extracted 0  ·  needs_review 1  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Cheng_2022.pdf` | Cheng R et al., Population pharmacokinetic/pharmacodyna…, European journal of pharmac… (2022) | popPK | 9 | [10.1016/j.ejps.2022.106304](https://doi.org/10.1016/j.ejps.2022.106304) | [36209987](https://pubmed.ncbi.nlm.nih.gov/36209987) | The paper is a population PK/PD study of PEG-rhGH (somatropin conjugate) in humans, but the specific numeric parameter values are not explicitly listed in the provided abstract text and are likely in the full results tables or supplementary material. |
| `Thorsted_2016.pdf` | Thorsted A et al., Translational mixed-effects PKPD modell…, British journal of pharmaco… (2016) | popPK | 9 | [10.1111/bph.13473](https://doi.org/10.1111/bph.13473) | [26921845](https://pubmed.ncbi.nlm.nih.gov/26921845) | The study develops a quantitative PK model for rhGH (a somatropin analog) in rats and humans, but the evidence text lacks specific numeric parameter values for clearance or volume. |

<sub>queue written 2026-10-07T09:22:53.424249+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Albin_2012 | irrelevant | 0 | 0 | The study analyzes estradiol levels and pubertal growth, not the pharmacokinetics of somatropin. |
| popPK | Cheng_2022 | relevant | 9 | 3 | The paper is a population PK/PD study of PEG-rhGH (somatropin conjugate) in humans, but the specific numeric parameter values are not explicitly listed in the provided abstract text and are likely in the full results tables or supplementary material. |
| popPK | Denson_2008 | irrelevant | 2 | 0 | The paper is a review of growth hormone therapy and does not contain original quantitative pharmacokinetic parameter values. |
| popPK | Dubois_2012 | irrelevant | 1 | 0 | The paper describes a methodological analysis of a somatropin trial but the provided evidence contains no specific numeric parameter values (e.g., CL, V, ka). |
| popPK | González-Sales_2015_2 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics and pharmacodynamics of tesamorelin, not somatropin. |
| popPK | He_2025 | relevant | 7 | 4 | The paper reports a population PK model for YPEG-rhGH (a PEGylated growth hormone derivative) in humans, but it is a modified product rather than native somatropin, and key numeric parameter values are referenced in Table 3 which is not fully provided in the evidence. |
| popPK | Kim_2020 | irrelevant | 0 | 0 | The paper investigates the pharmacokinetics of p-Coumaric Acid (from bamboo extract) in humans as an alternative to growth hormone therapy, but does not report PK parameters for somatropin itself. |
| popPK | Lu_2024 | irrelevant | 0 | 0 | The paper is an in vitro mechanistic study of anti-GH antibodies, not a pharmacokinetic study of somatropin. |
| popPK | Peng_2025 | irrelevant | 1 | 0 | The study investigates GB08, a novel Fc-GH long-acting analogue, rather than somatropin, which is only included as a short-acting comparator. |
| popPK | Prins_2025 | irrelevant | 0 | 0 | The paper investigates in vitro ghrelin receptor signaling mechanisms and does not report pharmacokinetic parameters for somatropin. |
| popPK | Raun_1998 | irrelevant | 0 | 0 | The study investigates the pharmacology of the drug ipamorelin, not the pharmacokinetics of somatropin. |
| popPK | Stanhope_2010 | irrelevant | 2 | 0 | The paper discusses rhGH (Growth Hormone) rather than Somatropin (a growth hormone receptor agonist) and contains no numeric PK parameters for Somatropin. |
| popPK | Thorsted_2016 | relevant | 9 | 3 | The study develops a quantitative PK model for rhGH (a somatropin analog) in rats and humans, but the evidence text lacks specific numeric parameter values for clearance or volume. |
| popPK | Zhang_2016 | irrelevant | 0 | 0 | The paper presents a general pharmacodynamic modeling framework and simulations, with no specific data or parameter estimates for somatropin. |
| popPK | Zhao_2026 | relevant | 10 | 2 | The study is a population PK/PD modeling study for Pegpesen (a somatropin formulation), but the specific numeric PK parameter estimates (CL, V, etc.) are not present in the provided text or numeric lines; only PD outcomes (GV, IGF-1) and dosing details are reported. |
| popPK | van_2021 | irrelevant | 0 | 0 | The paper focuses on statistical power for modeling pulsatile growth hormone (GH) secretion using a hypothetical drug, not on the pharmacokinetic parameters of somatropin itself. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 09:23 UTC</sub>
