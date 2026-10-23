<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B02B&quot;,&quot;href&quot;:&quot;atc/B02B.md&quot;},{&quot;label&quot;:&quot;etamsylate&quot;}]"></div>

# etamsylate

- **generic name:** etamsylate
- **ATC codes:** `B02BX01`
- **DrugBank:** [DB13483](https://go.drugbank.com/drugs/DB13483) · **PubChem:** not captured
- **molar mass:** 263.31 g/mol (C10H17NO5S) — DrugBank
- **groups:** investigational

## About

Etamsylate (ethamsylate) is a chemical compound used as an antihemorrhagic, a systemic hemostatic medicine to reduce bleeding. It is not authorised in the European Union and is considered investigational in major drug databases, though it remains known as a hemostatic agent.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q2000876](https://www.wikidata.org/wiki/Q2000876) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| etamsylate | parent | 263.31 | C10H17NO5S | DrugBank | — | Paine_2023 |
| 2,5-dihydroxybenzene sulphonate | metabolite | — (mass units only) | — | — | — | — |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="horse" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (horse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">horse</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub> | [Paine_2023_reference](drugs/drug_etamsylate/Etamsylate_Paine2023_reference.md) | — | 1-compartment (no model) | 2 | Paine SW et al., Novel holistic pharmacokinetic model ap…, Journal of veterinary pharm… (2023) | [10.1111/jvp.13387](https://doi.org/10.1111/jvp.13387) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-05 18:56 | 3:41 | 0/0/1 | 0/0/0 | 0/0/0 | 70,977/9,020 | ollama / qwen3.8:27b-mtp-q8_0 | 2 | 0/2 | 2/0 | 0 |

## Coverage

- **PubMed hits:** 13 matched, 12 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 1  ·  extracted 0  ·  needs_review 1  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_3 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Helmy_2013.pdf` | Helmy SA et al., A new and simple HPLC method for determ…, Saudi pharmaceutical journa… (2013) | popPK | 10 | [10.1016/j.jsps.2012.12.001](https://doi.org/10.1016/j.jsps.2012.12.001) | [24227961](https://pubmed.ncbi.nlm.nih.gov/24227961) | The study reports pharmacokinetic parameters for etamsylate in humans, but the specific numeric values are not present in the provided evidence. |
| `Paine_2023.pdf` | Paine SW et al., Novel holistic pharmacokinetic model ap…, Journal of veterinary pharm… (2023) | popPK | 10 | [10.1111/jvp.13387](https://doi.org/10.1111/jvp.13387) | [37255256](https://pubmed.ncbi.nlm.nih.gov/37255256) | The study reports a population PK model for etamsylate's active metabolite (2,5-HBSA) in horses, with typical clearance and bioavailability values provided in the abstract. |
| `Yamboliev_1992.pdf` | Yamboliev I et al., In vitro and in situ absorption of etam…, Die Pharmazie (1992) | popPK | 6 | not captured | [1518887](https://pubmed.ncbi.nlm.nih.gov/1518887) | The study reports quantitative absorption parameters (ka, t1/2) for etamsylate in rats, though it is primarily an in vitro/in situ absorption study rather than a full systemic PK model. |

<sub>queue written 2026-10-05T18:53:16.031295+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Belal_2011 | irrelevant | 0 | 0 | The paper describes analytical methods for quantifying etamsylate and reports degradation kinetics, but does not report pharmacokinetic disposition parameters (CL, V, ka, etc.) for the drug. |
| popPK | Dayrens_1983 | irrelevant | 0 | 0 | The study is an in-vitro/in-vivo immunological assay in mice measuring anti-inflammatory and immunostimulant activities, not a pharmacokinetic study reporting disposition parameters for etamsylate. |
| popPK | El-Masry_2020 | irrelevant | 2 | 0 | The study focuses on in-vitro release and in-silico prediction of plasma profiles without reporting measured quantitative PK parameters (CL, V, etc.) for etamsylate in the provided evidence. |
| popPK | Helmy_2013 | relevant | 10 | 0 | The study reports pharmacokinetic parameters for etamsylate in humans, but the specific numeric values are not present in the provided evidence. |
| popPK | Herrería-Bustillo_2023 | irrelevant | 0 | 0 | The study is an in-vitro thromboelastography (TEG) analysis of etamsylate's effect on coagulation in canine blood, not a pharmacokinetic study reporting disposition parameters like clearance or volume of distribution. |
| popPK | Huang_2025 | irrelevant | 0 | 0 | The study investigates analytical interference of ethamsylate on creatinine assays, not pharmacokinetic disposition parameters. |
| PD | Huang_2025 | not_relevant | 0 | 0 | The paper analyzes analytical interference of ethamsylate on creatinine assay methods, not a pharmacodynamic or exposure-response relationship for the drug's biological effect. |
| popPK | Jozsa_1983 | irrelevant | 0 | 0 | The study measures intraocular pressure and aqueous humor formation, not systemic pharmacokinetic parameters (CL, V, t1/2) for etamsylate. |
| popPK | Leminen_2012 | irrelevant | 0 | 0 | The paper is a review of tranexamic acid, and etamsylate is only mentioned as a comparator drug without any pharmacokinetic data. |
| PD | Leminen_2012 | not_relevant | 0 | 0 | The paper is a review of tranexamic acid and only mentions etamsylate as a comparator without providing any pharmacodynamic data, exposure-response analysis, or numeric PD parameters for etamsylate. |
| popPK | Nong_2017 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on new cinnamic acid derivatives where etamsylate is used only as a comparator for in-vitro coagulation activity, with no pharmacokinetic parameters reported. |
| PD | Nong_2017 | not_relevant | 3 | 2 | The paper reports a single IC50 value for etamsylate in an in vitro platelet aggregation assay for comparison, but does not provide a full concentration-effect curve, dose-response relationship, or PK/PD model parameters (Emax, slope, etc.) for etamsylate. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-05 18:53 UTC</sub>
