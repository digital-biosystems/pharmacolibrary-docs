<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;R06A&quot;,&quot;href&quot;:&quot;atc/R06A.md&quot;},{&quot;label&quot;:&quot;bilastine&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Bilastine_Togawa2016_caucasianb_5&quot;,&quot;label&quot;:&quot;Togawa_2016_caucasianb_5&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_bilastine/Bilastine_Togawa2016_caucasianb_5.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Bilastine_Togawa2016_japanesea&quot;,&quot;label&quot;:&quot;Togawa_2016_japanesea&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_bilastine/Bilastine_Togawa2016_japanesea.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# bilastine

- **generic name:** bilastine
- **ATC codes:** `R06AX29`, `S01GX13`
- **DrugBank:** [DB11591](https://go.drugbank.com/drugs/DB11591) · **PubChem:** [CID 185460](https://pubchem.ncbi.nlm.nih.gov/compound/185460)
- **molar mass:** 463.622 g/mol (C28H37N3O3) — DrugBank
- **groups:** approved

## About

Bilastine is an antihistamine used to treat allergic conditions such as allergic rhinitis and urticaria. It is an approved medicine and is widely used, including as eye drops for allergic eye symptoms.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q2902977](https://www.wikidata.org/wiki/Q2902977) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| bilastine | parent | 463.622 | C28H37N3O3 | DrugBank | [185460](https://pubchem.ncbi.nlm.nih.gov/compound/185460) | Kim_2021, Togawa_2016 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 22:41 | 4:31 | 0/0/3 | 0/0/2 | 0/0/0 | 81,614/10,588 | ollama / qwen3.8:27b-mtp-q8_0 | 2 | 0/2 | 2/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="a second model re-read this paper; the two readings agree on 0.0 of the compared fields. Primary extraction retained.">cross-check: partial</span><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q22, Q63 — no SI value to build from</sub><br><sub>route_to: `human_review`</sub> | [Kim_2021_reference](drugs/drug_bilastine/Bilastine_Kim2021_reference.md) | — | 3-compartment (no model) | 7 | Kim C et al., Application of a dual mechanistic appro…, CPT: pharmacometrics & syst… (2021) | [10.1002/psp4.12671](https://doi.org/10.1002/psp4.12671) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span><br><sub>blocking: unreported model parameter default(s): F</sub><br><sub>route_to: `scholar`</sub> | [Togawa_2016_caucasianb_5](drugs/drug_bilastine/Bilastine_Togawa2016_caucasianb_5.md) | ▶ model + simulator | 2-compartment, oral | 5 | Togawa M et al., Pharmacokinetics, Pharmacodynamics and…, Clinical drug investigation (2016) | [10.1007/s40261-016-0447-2](https://doi.org/10.1007/s40261-016-0447-2) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span><br><sub>blocking: unreported model parameter default(s): F</sub><br><sub>route_to: `scholar`</sub> | [Togawa_2016_japanesea](drugs/drug_bilastine/Bilastine_Togawa2016_japanesea.md) | ▶ model + simulator | 2-compartment, oral | 5 | Togawa M et al., Pharmacokinetics, Pharmacodynamics and…, Clinical drug investigation (2016) | [10.1007/s40261-016-0447-2](https://doi.org/10.1007/s40261-016-0447-2) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--green" title="re-read by einfracz:gpt-oss-120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span> | [Jauregizar_2009_flare](drugs/drug_bilastine/pd_Jauregizar_2009_flare.md) | flare area ← bilastine · indirect response — drug inhibits the production of flare area | model (no simulator) | Jauregizar N et al., Pharmacokinetic-pharmacodynamic modelli…, Clinical pharmacokinetics (2009) | [10.2165/11317180-000000000-00000](https://doi.org/10.2165/11317180-000000000-00000) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--green" title="re-read by einfracz:gpt-oss-120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span> | [Jauregizar_2009_wheal](drugs/drug_bilastine/pd_Jauregizar_2009_wheal.md) | wheal area ← bilastine · indirect response — drug inhibits the production of wheal area | model (no simulator) | Jauregizar N et al., Pharmacokinetic-pharmacodynamic modelli…, Clinical pharmacokinetics (2009) | [10.2165/11317180-000000000-00000](https://doi.org/10.2165/11317180-000000000-00000) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.5). Primary extraction retained.">cross-check: disputed</span> | [Togawa_2016_Flare](drugs/drug_bilastine/pd_Togawa_2016_Flare.md) | flare biomarker turnover ← bilastine | — | Togawa M et al., Pharmacokinetics, Pharmacodynamics and…, Clinical drug investigation (2016) | [10.1007/s40261-016-0447-2](https://doi.org/10.1007/s40261-016-0447-2) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.571). Primary extraction retained.">cross-check: disputed</span> | [Togawa_2016_Wheal](drugs/drug_bilastine/pd_Togawa_2016_Wheal.md) | wheal biomarker turnover ← bilastine | — | Togawa M et al., Pharmacokinetics, Pharmacodynamics and…, Clinical drug investigation (2016) | [10.1007/s40261-016-0447-2](https://doi.org/10.1007/s40261-016-0447-2) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=bilastine).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `SLCO1A2` substrate | DrugBank actor |
| absorption | liver | `SLCO2B1` inhibitor | DrugBank actor |
| absorption | small intestine | `SLCO1A2` substrate, `SLCO2B1` inhibitor | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: ABCB5 (inhibitor), ABCB5 (substrate), HRH1 (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 6 matched, 6 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 3  ·  extracted 0  ·  needs_review 3  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Vozmediano_2019.pdf` | Vozmediano V et al., Model-informed pediatric development ap…, European journal of pharmac… (2019) | popPK | 10 | [10.1016/j.ejps.2018.11.016](https://doi.org/10.1016/j.ejps.2018.11.016) | [30468868](https://pubmed.ncbi.nlm.nih.gov/30468868) | The paper describes a population PK model for bilastine in children, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract text. |
| `Jauregizar_2009.pdf` | Jauregizar N et al., Pharmacokinetic-pharmacodynamic modelli…, Clinical pharmacokinetics (2009) | popPK | 9 | [10.2165/11317180-000000000-00000](https://doi.org/10.2165/11317180-000000000-00000) | [19705924](https://pubmed.ncbi.nlm.nih.gov/19705924) | The study is a population PK/PD modeling study of bilastine in humans, but the evidence only explicitly provides the absorption rate constant (ka) and PD parameters, while the core disposition parameters (CL, V, Q) are not numerically listed in the provided text. |

<sub>queue written 2026-10-07T22:37:40.837857+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Jauregizar_2009 | relevant | 9 | 4 | The study is a population PK/PD modeling study of bilastine in humans, but the evidence only explicitly provides the absorption rate constant (ka) and PD parameters, while the core disposition parameters (CL, V, Q) are not numerically listed in the provided text. |
| popPK | Vozmediano_2019 | relevant | 10 | 0 | The paper describes a population PK model for bilastine in children, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract text. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 22:37 UTC</sub>
