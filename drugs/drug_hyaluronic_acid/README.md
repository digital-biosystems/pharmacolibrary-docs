<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D03A&quot;,&quot;href&quot;:&quot;atc/D03A.md&quot;},{&quot;label&quot;:&quot;hyaluronic acid&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;HyaluronicAcid_Jeon2013_reference&quot;,&quot;label&quot;:&quot;Jeon_2013_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_hyaluronic_acid/HyaluronicAcid_Jeon2013_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# hyaluronic acid

- **generic name:** hyaluronic acid
- **ATC codes:** `D03AX05`, `M09AX01`, `R01AX09`, `S01KA01`
- **DrugBank:** [DB08818](https://go.drugbank.com/drugs/DB08818) · **PubChem:** [CID 24759](https://pubchem.ncbi.nlm.nih.gov/compound/24759)
- **molar mass:** 776.6486 g/mol (C28H44N2O23) — DrugBank
- **groups:** approved, investigational, vet_approved

## About

Hyaluronic acid is a naturally occurring polysaccharide used to help wound healing, as a viscoelastic aid in eye surgery, in nasal preparations, and for joint (viscosupplement) treatment. It is widely used, with approved human and veterinary products, and is also being investigated for further uses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q337231](https://www.wikidata.org/wiki/Q337231) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| hyaluronic_acid | metabolite | 776.649 | C28H44N2O23 | DrugBank | [24759](https://pubchem.ncbi.nlm.nih.gov/compound/24759) | Lebel_1989 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 13:55 | 13:08 | 1/2/0 | 0/0/0 | 0/0/0 | 467,781/58,385 | openai / gpt-6-luna | 13 | 3/10 | 13/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.471). Primary extraction retained.">cross-check: disputed</span> | [Jeon_2013_reference](drugs/drug_hyaluronic_acid/HyaluronicAcid_Jeon2013_reference.md) | ▶ model + simulator | 1-compartment, oral | 4 | Jeon S et al., Saturable human neopterin response to i…, Journal of translational me… (2013) | [10.1186/1479-5876-11-240](https://doi.org/10.1186/1479-5876-11-240) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.471). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span><br><sub>blocking: C9 clearance/volume outside physiological window (implausible magnitude — unit/…</sub><br><sub>route_to: `human_review`</sub> | [Kim_2021_reference](drugs/drug_hyaluronic_acid/HyaluronicAcid_Kim2021_reference.md) | — | 2-compartment (no model) | 5 | Kim JH et al., Evaluation of Lidocaine and Metabolite…, Pharmaceutics (2021) | [10.3390/pharmaceutics13020203](https://doi.org/10.3390/pharmaceutics13020203) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.2). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (sheep), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">sheep</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Lebel_1989_reference](drugs/drug_hyaluronic_acid/HyaluronicAcid_Lebel1989_reference.md) | — | 1-compartment (no model) | 3 | Lebel L et al., A pharmacokinetic model of intravenousl…, Pharmaceutical research (1989) | [10.1023/a:1015982204926](https://doi.org/10.1023/a:1015982204926) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=hyaluronic_acid).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | skin | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: ABCC5 (substrate), C1QBP (binder), CD44 (binder), CEMIP2 (substrate), HABP2 (binder), HABP4 (binder), HAPLN1 (binder), HAPLN3 (binder), HMMR (binder), ICAM1 (binder), ICAM1 (inhibitor), IMPG2 (binder), LAYN (binder), LYVE1 (modulator), NCAN (binder), STAB2 (binder), TNFAIP6 (binder), VCAN (binder).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 62 matched, 20 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 3  ·  extracted 1  ·  needs_review 0  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Lebel_1989.pdf` | Lebel L et al., A pharmacokinetic model of intravenousl…, Pharmaceutical research (1989) | popPK | 10 | [10.1023/a:1015982204926](https://doi.org/10.1023/a:1015982204926) | [2813260](https://pubmed.ncbi.nlm.nih.gov/2813260) | Sheep hyaluronan disposition is quantitatively modeled, with numeric half-life and Michaelis-Menten parameters present. |

<sub>queue written 2026-10-07T13:44:14.297221+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Asselman_2005 | irrelevant | 0 | 0 | This is a cell-biology study of hyaluronan secretion and expression, not a pharmacokinetic study. |
| popPK | Bedair_2023 | irrelevant | 0 | 0 | Hyaluronic acid is measured only as a fibrosis biomarker; no pharmacokinetic parameters for it are reported. |
| popPK | Caro-León_2023 | irrelevant | 0 | 0 | Hyaluronic acid is only used to coat nanoparticles; the paper reports no pharmacokinetic parameters. |
| popPK | Egbu_2018 | irrelevant | 0 | 0 | This is an in vitro hydrogel study measuring infliximab release, not hyaluronic-acid disposition. |
| popPK | Espejo-Román_2023 | irrelevant | 0 | 0 | This is an in-vitro cancer-inhibitor study, not a pharmacokinetic study of hyaluronic acid. |
| popPK | Fatima_2021 | irrelevant | 0 | 0 | Hyaluronic acid is only a hyaluronidase-assay substrate; the paper reports no hyaluronic-acid disposition parameters. |
| popPK | Huang_2022 | irrelevant | 0 | 0 | Hyaluronic acid is only a nanoparticle coating; no hyaluronic-acid pharmacokinetic disposition parameters are reported. |
| popPK | Jeon_2013 | irrelevant | 0 | 0 | The reported PK parameters are for interferon-α, while hyaluronate is only a formulation ingredient. |
| popPK | Kim_2021 | irrelevant | 0 | 0 | The quantitative PK model is for lidocaine and its metabolites, not hyaluronic acid. |
| popPK | Nunn_2021 | irrelevant | 0 | 0 | Hyaluronan is measured as a vaginal biomarker, with no pharmacokinetic disposition parameters reported. |
| popPK | Panunzio_2026 | irrelevant | 0 | 0 | This systematic review models penile-curvature outcomes, not hyaluronic acid pharmacokinetics, and reports no disposition parameter values. |
| popPK | Rajadhyaksha_2023 | irrelevant | 0 | 0 | The study models trastuzumab scFv disposition, while hyaluronic acid is only a formulation polymer. |
| popPK | Romero-Tamudo_2025 | irrelevant | 0 | 0 | The study investigates anticancer compounds targeting CD44; hyaluronic acid is only a binding comparator, with no PK parameters reported for it. |
| popPK | Ryu_2021 | relevant | 9 | 2 | The mouse study models HA-filler swelling and degradation, but rate-constant estimates are only in the omitted Table 1. |
| popPK | Salesa_2021 | irrelevant | 0 | 0 | This in-vitro nanomaterial study reports no pharmacokinetic parameters for hyaluronic acid. |
| popPK | Tschopp_2023 | irrelevant | 0 | 0 | This is a human efficacy trial and reports no quantitative pharmacokinetic disposition parameters for hyaluronic acid. |
| popPK | Wang_2024 | irrelevant | 1 | 0 | Hyaluronic acid is a tumor biomarker, not the subject drug, and no numeric PK parameter values are provided. |
| popPK | Würtemberger_2020 | irrelevant | 0 | 0 | This in-vitro study tests other compounds and reports no pharmacokinetic parameters for hyaluronic acid. |
| popPK | Zheng_2026 | irrelevant | 0 | 0 | This human filler-outcomes study reports no pharmacokinetic disposition parameters for hyaluronic acid. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 13:44 UTC</sub>
