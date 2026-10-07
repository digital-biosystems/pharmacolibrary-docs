<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;H01A&quot;,&quot;href&quot;:&quot;atc/H01A.md&quot;},{&quot;label&quot;:&quot;somatropin&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Somatropin_van2021_reference&quot;,&quot;label&quot;:&quot;van_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_somatropin/Somatropin_van2021_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

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
| 2026-10-07 09:25 | 3:19 | 1/2/0 | 0/1/0 | 0/0/0 | 207,936/13,484 | einfracz / qwen3.8-27b | 7 | 1/6 | 6/1 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [van_2021_reference](drugs/drug_somatropin/Somatropin_van2021_reference.md) | ▶ model + simulator | 1-compartment, oral | 3 | van Esdonk MJ et al., The power of modelling pulsatile profil…, Journal of pharmacokinetics… (2021) | [10.1007/s10928-021-09743-2](https://doi.org/10.1007/s10928-021-09743-2) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [González-Sales_2015_reference](drugs/drug_somatropin/Somatropin_GonzlezSales2015_reference.md) | — | 1-compartment (no model) | 0 | González-Sales M et al., Population pharmacokinetic analysis of…, Clinical pharmacokinetics (2015) | [10.1007/s40262-014-0202-x](https://doi.org/10.1007/s40262-014-0202-x) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Papathanasiou_2021_reference](drugs/drug_somatropin/Somatropin_Papathanasiou2021_reference.md) | — | general linear (no model) | 0 | Papathanasiou T et al., Population Pharmacokinetics and Pharmac…, Clinical pharmacokinetics (2021) | [10.1007/s40262-021-01011-3](https://doi.org/10.1007/s40262-021-01011-3) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.50).">human + animal</span> | [Thorsted_2016_IGF_1](drugs/drug_somatropin/pd_Thorsted_2016_IGF_1.md) | insulin-like growth factor 1 (IGF-1) ← recombinant human growth hormone · indirect response — drug stimulates the production of insulin-like growth factor 1 (IGF-1) | — | Thorsted A et al., Translational mixed-effects PKPD modell…, British journal of pharmaco… (2016) | [10.1111/bph.13473](https://doi.org/10.1111/bph.13473) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.50).">human + animal</span> | [Thorsted_2016_bodyweight_gain](drugs/drug_somatropin/pd_Thorsted_2016_bodyweight_gain.md) | bodyweight gain ← insulin-like growth factor 1 · direct linear effect | — | Thorsted A et al., Translational mixed-effects PKPD modell…, British journal of pharmaco… (2016) | [10.1111/bph.13473](https://doi.org/10.1111/bph.13473) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=somatropin) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` substrate | DrugBank actor |
| absorption | kidney | `ABCB1` substrate | DrugBank actor |
| absorption | liver | `ABCB1` substrate | DrugBank actor |
| absorption | placenta | `ABCB1` substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` substrate | DrugBank actor |
| absorption | testis | `ABCB1` substrate | DrugBank actor |
| metabolism | liver | `CYP1A2` inducer, `CYP2C19` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: GHR (target), PRLR (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 243 matched, 20 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 3  ·  extracted 1  ·  needs_review 0  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

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
