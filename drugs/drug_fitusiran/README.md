<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B02B&quot;,&quot;href&quot;:&quot;atc/B02B.md&quot;},{&quot;label&quot;:&quot;fitusiran&quot;}]"></div>

# fitusiran

- **generic name:** fitusiran
- **ATC codes:** `B02BX12`
- **DrugBank:** [DB15002](https://go.drugbank.com/drugs/DB15002) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Fitusiran is a small interfering RNA therapy that lowers antithrombin production and is used to treat bleeding in people with haemophilia. It is an approved antihemorrhagic medicine, though some uses remain under investigation.

<small>⚠️ **Unverified** — written by `glm-5.3-flash` from general knowledge (no Wikidata entry found) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-05 19:45 | 20:20 | 0/4/0 | 1/0/0 | 0/0/0 | 374,208/57,898 | ollama / qwen3.8:27b-mtp-q8_0 | 8 | 2/6 | 8/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.444). The first reading is what the record holds.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">human + animal</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Fan_2026_humansa](drugs/drug_fitusiran/Fitusiran_Fan2026_humansa.md) | — | 1-compartment (no model) | 8 | Fan X et al., A computational model-powered platform…, Molecular therapy. Nucleic… (2026) | [10.1016/j.omtn.2026.102936](https://doi.org/10.1016/j.omtn.2026.102936) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.5). The first reading is what the record holds.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">human + animal</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Fan_2026_micea](drugs/drug_fitusiran/Fitusiran_Fan2026_micea.md) | — | 1-compartment (no model) | 8 | Fan X et al., A computational model-powered platform…, Molecular therapy. Nucleic… (2026) | [10.1016/j.omtn.2026.102936](https://doi.org/10.1016/j.omtn.2026.102936) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.5). The first reading is what the record holds.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">human + animal</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Fan_2026_monkeysc](drugs/drug_fitusiran/Fitusiran_Fan2026_monkeysc.md) | — | 1-compartment (no model) | 8 | Fan X et al., A computational model-powered platform…, Molecular therapy. Nucleic… (2026) | [10.1016/j.omtn.2026.102936](https://doi.org/10.1016/j.omtn.2026.102936) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.5). The first reading is what the record holds.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">human + animal</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Fan_2026_ratsb](drugs/drug_fitusiran/Fitusiran_Fan2026_ratsb.md) | — | 1-compartment (no model) | 8 | Fan X et al., A computational model-powered platform…, Molecular therapy. Nucleic… (2026) | [10.1016/j.omtn.2026.102936](https://doi.org/10.1016/j.omtn.2026.102936) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:gpt-oss-120b (?, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">human + animal</span> | [Fan_2026_Protein](drugs/drug_fitusiran/pd_Fan_2026_Protein.md) | target protein ← fitusiran · indirect response — drug inhibits the production of target protein | — | Fan X et al., A computational model-powered platform…, Molecular therapy. Nucleic… (2026) | [10.1016/j.omtn.2026.102936](https://doi.org/10.1016/j.omtn.2026.102936) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:gpt-oss-120b (?, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">human + animal</span> | [Fan_2026_mRNA](drugs/drug_fitusiran/pd_Fan_2026_mRNA.md) | target mRNA ← fitusiran · indirect response — drug inhibits the production of target mRNA | — | Fan X et al., A computational model-powered platform…, Molecular therapy. Nucleic… (2026) | [10.1016/j.omtn.2026.102936](https://doi.org/10.1016/j.omtn.2026.102936) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=fitusiran).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: SERPINC1 (degradation).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 24 matched, 19 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 4  ·  extracted 0  ·  needs_review 0  ·  rejected 4  ·  stale 4
- **scholar-agent fallback query used:** True

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Ayyar_2021.pdf` | Ayyar VS et al., Minimal Physiologically Based Pharmacok…, The Journal of pharmacology… (2021) | popPK | 8 | [10.1124/jpet.121.000805](https://doi.org/10.1124/jpet.121.000805) | [34413198](https://pubmed.ncbi.nlm.nih.gov/34413198) | The paper describes a PBPK model for fitusiran and mentions allometric scaling exponents, but specific quantitative PK parameters (CL, V, etc.) are not explicitly listed in the provided text. |

<sub>queue written 2026-10-05T19:26:24.288062+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Ayyar_2021 | relevant | 8 | 2 | The paper describes a PBPK model for fitusiran and mentions allometric scaling exponents, but specific quantitative PK parameters (CL, V, etc.) are not explicitly listed in the provided text. |
| popPK | Berk_2021 | irrelevant | 0 | 0 | The study investigates a novel siRNA targeting Lin28B in mice, using fitusiran only as a reference for stability comparisons, and does not report PK parameters for fitusiran. |
| popPK | Di_2019 | irrelevant | 0 | 0 | The paper is a review discussing adherence and ultrasound monitoring in haemophilia, mentioning fitusiran only as a non-FVIII/FIX replacement approach without reporting any pharmacokinetic parameters. |
| popPK | Giuffrida_2026 | irrelevant | 0 | 0 | The paper is a narrative review of hemophilia A therapies that mentions fitusiran but does not report any quantitative pharmacokinetic parameters or models. |
| popPK | Hermans_2021 | irrelevant | 0 | 0 | The paper is a review of surgical management in haemophilia and mentions fitusiran only as a context for non-replacement therapy, without reporting any pharmacokinetic parameters. |
| popPK | Jiménez-Yuste_2025 | irrelevant | 1 | 0 | This is a narrative review of non-factor therapies that mentions fitusiran but does not report original quantitative pharmacokinetic parameters or compartmental models. |
| popPK | Kaczmarek_2018 | irrelevant | 0 | 0 | The paper is a review of gene therapy for hemophilia and mentions fitusiran only in a table of non-substitutional therapies without providing any pharmacokinetic parameters. |
| popPK | Lillicrap_2020 | irrelevant | 0 | 0 | The paper is a review of hemophilia management focusing on emicizumab and FVIII, and does not contain pharmacokinetic data for fitusiran. |
| popPK | Mancuso_2022 | irrelevant | 0 | 0 | The paper is a clinical management review discussing surgical protocols and does not report any quantitative pharmacokinetic parameters for fitusiran. |
| popPK | Mancuso_2024 | irrelevant | 0 | 0 | The paper is a narrative review discussing clinical outcomes and safety of non-factor therapies, containing no quantitative pharmacokinetic parameters for fitusiran. |
| PGx | Niazi_2026 | not_relevant | 0 | 0 | The paper is a general review of therapeutic alternatives and mentions fitusiran's clinical efficacy (bleeding reduction) but does not report any pharmacogenomic effects on its PK or PD parameters. |
| popPK | Okaygoun_2021 | irrelevant | 2 | 1 | The paper is a review that mentions fitusiran's half-life (2.6–5.3 h) but does not report a compartmental or population-PK model with quantitative parameters like clearance or volume. |
| popPK | Pelland-Marcotte_2019 | irrelevant | 0 | 0 | The paper is a general review of hemophilia treatment landscapes and does not report any quantitative pharmacokinetic parameters for fitusiran. |
| popPK | Pipe_2025 | irrelevant | 2 | 0 | The paper is a long-term safety and efficacy study that mentions PK characterization as a secondary objective but does not report any quantitative PK parameters (CL, V, t1/2) in the provided text. |
| popPK | Rajabi_2026 | irrelevant | 0 | 0 | The paper is a review of RNA therapeutics and delivery methods that mentions fitusiran only as an example of an siRNA strategy, without reporting any quantitative pharmacokinetic parameters. |
| popPK | Rodriguez-Merchan_2023 | irrelevant | 0 | 0 | The paper is a review of hemophilic arthropathy diagnosis and treatment, mentioning fitusiran only as a therapeutic option without reporting any pharmacokinetic parameters. |
| popPK | Sten_2023 | irrelevant | 2 | 0 | The paper is a review of GalNAc-siRNAs where fitusiran is only a comparator, and no quantitative PK parameters for fitusiran are reported (Table S3 explicitly states no translational data were available for fitusiran). |
| PD | Sten_2023 | not_relevant | 0 | 0 | The paper focuses exclusively on the pharmacokinetics (PK) of GalNAc-siRNAs, including dose-proportionality and compartmental models, but does not report any pharmacodynamic (PD) or exposure-response relationships for fitusiran or any other compound. |
| popPK | Tian_2025 | irrelevant | 2 | 0 | The study focuses on a different drug (RBD5044) and uses fitusiran only as a comparator for delivery coefficients, without reporting quantitative PK parameters for fitusiran. |
| PD | Tian_2025 | not_relevant | 4 | 2 | The paper focuses on a mechanistic PBPK-PD model for a different compound (RBD5044) and only qualitatively mentions fitusiran in the context of delivery coefficients, without providing specific numeric PD parameters (Emax, EC50) or an extractable concentration-effect curve for fitusiran. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-05 19:26 UTC</sub>
