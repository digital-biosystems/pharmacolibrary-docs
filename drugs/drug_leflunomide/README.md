<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L04A&quot;,&quot;href&quot;:&quot;atc/L04A.md&quot;},{&quot;label&quot;:&quot;leflunomide&quot;}]"></div>

# leflunomide

- **generic name:** leflunomide
- **ATC codes:** `L04AA13`, `L04AK01`
- **DrugBank:** [DB01097](https://go.drugbank.com/drugs/DB01097) · **PubChem:** [CID 3899](https://pubchem.ncbi.nlm.nih.gov/compound/3899)
- **molar mass:** 270.2073 g/mol (C12H9F3N2O2) — DrugBank
- **groups:** approved, investigational

## About

Leflunomide is an immunosuppressive disease-modifying antirheumatic drug used to treat rheumatoid arthritis and psoriatic arthritis. It is approved and authorised in the European Union, where several products remain on the market, though it carries a boxed warning.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q248550](https://www.wikidata.org/wiki/Q248550) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| leflunomide | parent | 270.207 | C12H9F3N2O2 | DrugBank | [3899](https://pubchem.ncbi.nlm.nih.gov/compound/3899) | Hopkins_2015, Li_2002, Shi_2005 |
| A77 1726 | metabolite | — (mass units only) | — | — | — | — |
| teriflunomide (A771726, M1) | metabolite | 270.21 | C12H9F3N2O2 | PubChem | [54684141](https://pubchem.ncbi.nlm.nih.gov/compound/54684141) | Hopkins_2015, Li_2002, Shi_2005 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-15 04:13 | 5:30 | 0/4/4 | 0/0/0 | 0/0/0 | 250,048/58,643 | einfracz / qwen3.8-27b | 5 | 0/5 | 5/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.357). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q370, Q22, Q22, Q61 — no SI value t…</sub><br><sub>blocking: C6_cl_magnitude failed (ratio None)</sub><br><sub>route_to: `human_review`</sub> | [Hopkins_2015_base](drugs/drug_leflunomide/Leflunomide_Hopkins2015_base.md) | — | parent + metabolite (no model) | 6 | Hopkins AM et al., Semiphysiologically Based Pharmacokinet…, CPT: pharmacometrics & syst… (2015) | [10.1002/psp4.46](https://doi.org/10.1002/psp4.46) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.455). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: C6_cl_magnitude failed (ratio None)</sub><br><sub>route_to: `human_review`</sub> | [Hopkins_2015_full](drugs/drug_leflunomide/Leflunomide_Hopkins2015_full.md) | — | parent + metabolite (no model) | 3 | Hopkins AM et al., Semiphysiologically Based Pharmacokinet…, CPT: pharmacometrics & syst… (2015) | [10.1002/psp4.46](https://doi.org/10.1002/psp4.46) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.333). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q369, Q54, Q61, Q368, Q63, Q64, Q30…</sub><br><sub>route_to: `human_review`</sub> | [Hopkins_2015_initial_literature_estimate](drugs/drug_leflunomide/Leflunomide_Hopkins2015_initial_literature_estimate.md) | — | parent + metabolite (no model) | 14 | Hopkins AM et al., Semiphysiologically Based Pharmacokinet…, CPT: pharmacometrics & syst… (2015) | [10.1002/psp4.46](https://doi.org/10.1002/psp4.46) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: disposition incomplete — only volume extracted — the engineer needs clearance/e…</sub><br><sub>route_to: `human_review`</sub> | [Hopkins_2015_mfcll](drugs/drug_leflunomide/Leflunomide_Hopkins2015_mfcll.md) | — | parent + metabolite (no model) | 1 | Hopkins AM et al., Semiphysiologically Based Pharmacokinet…, CPT: pharmacometrics & syst… (2015) | [10.1002/psp4.46](https://doi.org/10.1002/psp4.46) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Bohanec_2009_reference](drugs/drug_leflunomide/Leflunomide_Bohanec2009_reference.md) | — | 1-compartment (no model) | 0 | Bohanec Grabar P et al., Investigation of the influence of CYP1A…, Drug metabolism and disposi… (2009) | [10.1124/dmd.109.027482](https://doi.org/10.1124/dmd.109.027482) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.5). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Chan_2005_reference](drugs/drug_leflunomide/Leflunomide_Chan2005_reference.md) | — | 1-compartment (no model) | 0 | Chan V et al., Population pharmacokinetics and associa…, British journal of clinical… (2005) | [10.1111/j.1365-2125.2005.02415.x](https://doi.org/10.1111/j.1365-2125.2005.02415.x) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.417). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Li_2002_reference](drugs/drug_leflunomide/Leflunomide_Li2002_reference.md) | — | 1-compartment (no model) | 3 | Li J et al., Pharmacokinetics of leflunomide in Chin…, Acta pharmacologica Sinica (2002) | — |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (primary re-run, agreement 0.167). Primary extraction retained.">cross-check: partial</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Shi_2005_reference](drugs/drug_leflunomide/Leflunomide_Shi2005_reference.md) | — | 1-compartment (no model) | 0 | Shi J et al., Population pharmacokinetics of the acti…, Journal of pharmacokinetics… (2005) | [10.1007/s10928-005-0049-8](https://doi.org/10.1007/s10928-005-0049-8) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=leflunomide).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCG2` substrate | DrugBank actor |
| absorption | liver | `ABCG2` substrate | DrugBank actor |
| absorption | mammary gland | `ABCG2` substrate | DrugBank actor |
| absorption | small intestine | `ABCG2` substrate | DrugBank actor |
| absorption | testis | `ABCG2` substrate | DrugBank actor |
| metabolism | liver | `CYP1A2` substrate, `CYP2C9` inhibitor/substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: AHR (target), DHODH (inhibitor), PTK2B (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 14 matched, 14 returned
- **screened:** 6  ·  **relevant:** 5
- **records:** 8  ·  extracted 0  ·  needs_review 4  ·  rejected 4  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_6 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Chan_2005.pdf` | Chan V et al., Population pharmacokinetics and associa…, British journal of clinical… (2005) | popPK | 10 | [10.1111/j.1365-2125.2005.02415.x](https://doi.org/10.1111/j.1365-2125.2005.02415.x) | [16120064](https://pubmed.ncbi.nlm.nih.gov/16120064) | The study reports quantitative population PK parameters (CL/F, Vd) for leflunomide's active metabolite A77 1726 in humans. |
| `Li_2002.pdf` | Li J et al., Pharmacokinetics of leflunomide in Chin…, Acta pharmacologica Sinica (2002) | popPK | 10 | not captured | [12060531](https://pubmed.ncbi.nlm.nih.gov/12060531) | The study reports quantitative pharmacokinetic parameters (half-lives, Cmax, AUC) for the active metabolite of leflunomide, which represents leflunomide's disposition. |
| `Mehl_2012.pdf` | Mehl ML et al., Pharmacokinetics and pharmacodynamics o…, Journal of veterinary pharm… (2012) | popPK | 10 | [10.1111/j.1365-2885.2011.01306.x](https://doi.org/10.1111/j.1365-2885.2011.01306.x) | [21615755](https://pubmed.ncbi.nlm.nih.gov/21615755) | The paper reports quantitative pharmacokinetic parameters (ka, ke, half-lives, AUC, Cmax, bioavailability) for leflunomide in domestic cats directly in the text. |
| `Shi_2005.pdf` | Shi J et al., Population pharmacokinetics of the acti…, Journal of pharmacokinetics… (2005) | popPK | 10 | [10.1007/s10928-005-0049-8](https://doi.org/10.1007/s10928-005-0049-8) | [16284916](https://pubmed.ncbi.nlm.nih.gov/16284916) | The paper reports a population pharmacokinetic model for leflunomide's active metabolite (M1) with specific numeric equations for clearance and volume of distribution in the text. |
| `Shin_2023.pdf` | Shin Y et al., Development of a population pharmacokin…, European journal of pharmac… (2023) | popPK | 10 | [10.1016/j.ejps.2023.106402](https://doi.org/10.1016/j.ejps.2023.106402) | [36754259](https://pubmed.ncbi.nlm.nih.gov/36754259) | The paper is a population PK study of leflunomide's active metabolite (A771726) in humans, but the specific numeric parameter values (CL, V, etc.) are not listed in the provided abstract text. |
| `Bohanec_2009.pdf` | Bohanec Grabar P et al., Investigation of the influence of CYP1A…, Drug metabolism and disposi… (2009) | popPK | 7 | [10.1124/dmd.109.027482](https://doi.org/10.1124/dmd.109.027482) | [19581389](https://pubmed.ncbi.nlm.nih.gov/19581389) | The study reports a population PK model for leflunomide's active metabolite (A77 1726) and provides some specific clearance and concentration values, but lacks full individual parameter estimates (like V/F, ka, or half-life) typically required for comprehensive extraction. |

<sub>queue written 2026-10-15T04:08:20.576592+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bohanec_2009 | relevant | 7 | 3 | The study reports a population PK model for leflunomide's active metabolite (A77 1726) and provides some specific clearance and concentration values, but lacks full individual parameter estimates (like V/F, ka, or half-life) typically required for comprehensive extraction. |
| popPK | Hopkins_2016 | irrelevant | 0 | 0 | This is a time-to-event (survival) analysis of treatment cessation, not a pharmacokinetic study reporting disposition parameters like CL, V, or Ka. |
| popPK | Kaur_2021 | irrelevant | 0 | 0 | The paper is a narrative review of the antiviral efficacy and safety of leflunomide for COVID-19 and does not report any quantitative pharmacokinetic parameters (CL, V, etc.) for the drug. |
| popPK | Lang_2023 | irrelevant | 0 | 0 | The study is an in vitro virology investigation reporting antiviral efficacy (EC50/CC50) of teriflunomide and leflunomide, not a pharmacokinetic study with disposition parameters. |
| popPK | Shin_2023 | relevant | 10 | 2 | The paper is a population PK study of leflunomide's active metabolite (A771726) in humans, but the specific numeric parameter values (CL, V, etc.) are not listed in the provided abstract text. |
| popPK | Thanigaimani_2022 | irrelevant | 0 | 0 | The study is a clinical observation of AAA growth in patients taking various immunosuppressants and does not report any pharmacokinetic parameters for leflunomide. |
| popPK | Wiese_2021 | irrelevant | 2 | 0 | The study examines the association between teriflunomide concentrations and clinical response (DAS28) but does not report quantitative pharmacokinetic disposition parameters (CL, V, Q, ka) or a population PK model for leflunomide/teriflunomide. |
| popPK | Xiong_2020 | irrelevant | 0 | 0 | The study focuses on novel DHODH inhibitors (S312/S416) and uses leflunomide only as a comparator; no PK parameters are reported for leflunomide. |
| popPK | Yao_2019 | irrelevant | 3 | 0 | The study's primary subject is the novel drug teriflunomide sodium; leflunomide is used only as a reference/comparator for bioavailability, and no quantitative PK parameter values are provided in the evidence. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-15 04:09 UTC</sub>
