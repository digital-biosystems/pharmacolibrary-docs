<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D11A&quot;,&quot;href&quot;:&quot;atc/D11A.md&quot;},{&quot;label&quot;:&quot;ruxolitinib&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Ruxolitinib_Polepally2026_reference&quot;,&quot;label&quot;:&quot;Polepally_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ruxolitinib/Ruxolitinib_Polepally2026_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# ruxolitinib

- **generic name:** ruxolitinib
- **ATC codes:** `D11AH09`, `L01EJ01`
- **DrugBank:** [DB08877](https://go.drugbank.com/drugs/DB08877) · **PubChem:** [CID 25126798](https://pubchem.ncbi.nlm.nih.gov/compound/25126798)
- **molar mass:** 306.365 g/mol (C17H18N6) — DrugBank
- **groups:** approved, investigational

## About

Ruxolitinib, a JAK inhibitor, is used for myeloproliferative disorders such as myelofibrosis and polycythemia vera, for graft-versus-host disease, and as a skin preparation for vitiligo. It is approved and authorised in the European Union, with additional investigational uses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q7383611](https://www.wikidata.org/wiki/Q7383611) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| ruxolitinib | parent | 306.365 | C17H18N6 | DrugBank | [25126798](https://pubchem.ncbi.nlm.nih.gov/compound/25126798) | Tachet_2026 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 07:57 | 5:27 | 1/4/0 | 0/0/1 | 0/0/0 | 257,583/19,693 | einfracz / qwen3.8-27b | 9 | 3/6 | 7/2 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.882). Primary extraction retained.">cross-check: partial</span> | [Polepally_2026_reference](drugs/drug_ruxolitinib/Ruxolitinib_Polepally2026_reference.md) | ▶ model + simulator | 2-compartment, oral | 6 | Polepally AR et al., Semi-Mechanistic PK/PD Modeling of Plat…, CPT: pharmacometrics & syst… (2026) | [10.1002/psp4.70260](https://doi.org/10.1002/psp4.70260) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.643). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Appeldoorn_2023_reference](drugs/drug_ruxolitinib/Ruxolitinib_Appeldoorn2023_reference.md) | — | 2-compartment (no model) | 4 | Appeldoorn TYJ et al., Pharmacokinetics and Pharmacodynamics o…, Clinical pharmacokinetics (2023) | [10.1007/s40262-023-01225-7](https://doi.org/10.1007/s40262-023-01225-7) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (primary re-run, agreement 0.2). Primary extraction retained.">cross-check: partial</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Hurwitz_2021_reference](drugs/drug_ruxolitinib/Ruxolitinib_Hurwitz2021_reference.md) | — | 1-compartment (no model) | 0 | Hurwitz SJ et al., Pharmacokinetics of Ruxolitinib in HIV…, Journal of clinical pharmac… (2021) | [10.1002/jcph.1930](https://doi.org/10.1002/jcph.1930) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Isberner_2021_reference](drugs/drug_ruxolitinib/Ruxolitinib_Isberner2021_reference.md) | — | 1-compartment (no model) | 0 | Isberner N et al., Ruxolitinib exposure in patients with a…, Cancer chemotherapy and pha… (2021) | [10.1007/s00280-021-04351-w](https://doi.org/10.1007/s00280-021-04351-w) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.182). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Tachet_2026_reference](drugs/drug_ruxolitinib/Ruxolitinib_Tachet2026_reference.md) | — | 1-compartment (no model) | 4 | Tachet J et al., Ruxolitinib Pharmacokinetics and Exposu…, Clinical pharmacology and t… (2026) | [10.1002/cpt.70367](https://doi.org/10.1002/cpt.70367) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.455). Primary extraction retained.">cross-check: disputed</span> | [Polepally_2026_PLT](drugs/drug_ruxolitinib/pd_Polepally_2026_PLT.md) | platelet count ← ruxolitinib · indirect response — drug inhibits the loss of platelet count | model (no simulator) | Polepally AR et al., Semi-Mechanistic PK/PD Modeling of Plat…, CPT: pharmacometrics & syst… (2026) | [10.1002/psp4.70260](https://doi.org/10.1002/psp4.70260) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.571). Primary extraction retained.">cross-check: disputed</span> | [Polepally_2026_SV](drugs/drug_ruxolitinib/pd_Polepally_2026_SV.md) | spleen volume ← ruxolitinib · indirect response — drug inhibits the production of spleen volume | model (no simulator) | Polepally AR et al., Semi-Mechanistic PK/PD Modeling of Plat…, CPT: pharmacometrics & syst… (2026) | [10.1002/psp4.70260](https://doi.org/10.1002/psp4.70260) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 16 matched, 15 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 5  ·  extracted 1  ·  needs_review 0  ·  rejected 4  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Hurwitz_2021.pdf` | Hurwitz SJ et al., Pharmacokinetics of Ruxolitinib in HIV…, Journal of clinical pharmac… (2021) | popPK | 10 | [10.1002/jcph.1930](https://doi.org/10.1002/jcph.1930) | [34169526](https://pubmed.ncbi.nlm.nih.gov/34169526) | The paper reports a population PK model for ruxolitinib in humans with specific quantitative parameters, including apparent oral clearance values (12.9 and 22.5 L/hr). |

<sub>queue written 2026-10-07T07:52:45.915054+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Appeldoorn_2023 | irrelevant | 4 | 8 | Although quantitative PK parameters (CL, V, ka, t1/2) for ruxolitinib are present and readable in the text, the paper is a review rather than an original pharmacokinetic study reporting primary data. |
| popPK | Bondeelle_2020 | irrelevant | 0 | 0 | The study evaluates the effect of ruxolitinib on pulmonary function trajectories (FEV1/FVC) in GVHD patients, not its pharmacokinetic parameters. |
| popPK | Ceccacci_2026 | irrelevant | 0 | 0 | The paper is a clinical efficacy and mechanistic study of ruxolitinib in Hailey-Hailey disease, containing no pharmacokinetic parameter values (CL, V, ka, etc.). |
| popPK | Chen_2025 | irrelevant | 0 | 0 | The study focuses on the exposure-response relationship of fedratinib, not ruxolitinib; ruxolitinib is only mentioned as a prior therapy or comparator context. |
| popPK | Deshpande_2012 | irrelevant | 0 | 0 | The paper is an in vitro mechanistic study on JAK2 mutations conferring resistance to ruxolitinib and reports EC50 values in cell lines, not pharmacokinetic disposition parameters (CL, V, t1/2). |
| popPK | Febvre-James_2018 | irrelevant | 0 | 0 | The study is in-vitro mechanistic research investigating the effect of ruxolitinib on gene expression, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Li_2023 | irrelevant | 0 | 0 | no_text gate: only 155 chars of text extracted (&lt; 400) |
| popPK | Tachet_2025 | irrelevant | 0 | 0 | This is a protocol for a prospective observational study that describes the methodology for future pharmacokinetic modeling but does not report any original quantitative PK parameter values for ruxolitinib. |
| popPK | Waitman_2024 | irrelevant | 0 | 0 | The study focuses on the synthesis and in vitro/in silico activity of hybrid kinase-HDAC inhibitors, using ruxolitinib only as a pharmacophore reference, and does not report ruxolitinib's PK parameters. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 07:53 UTC</sub>
