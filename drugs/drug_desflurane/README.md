<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N01A&quot;,&quot;href&quot;:&quot;atc/N01A.md&quot;},{&quot;label&quot;:&quot;desflurane&quot;}]"></div>

# desflurane

- **generic name:** desflurane
- **ATC codes:** `N01AB07`
- **DrugBank:** [DB01189](https://go.drugbank.com/drugs/DB01189) · **PubChem:** [CID 42113](https://pubchem.ncbi.nlm.nih.gov/compound/42113)
- **molar mass:** 168.0378 g/mol (C3H2F6O) — DrugBank
- **groups:** approved, investigational

## About

Desflurane is an inhalational general anaesthetic used to induce and maintain anaesthesia during surgery. It is an approved medicine used widely in operating rooms, mainly in hospital settings.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q419383](https://www.wikidata.org/wiki/Q419383) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| desflurane | parent | 168.038 | C3H2F6O | DrugBank | [42113](https://pubchem.ncbi.nlm.nih.gov/compound/42113) | Hendrickx_2003, Wissing_2000 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 04:12 | 2:45 | 0/3/0 | 3/0/1 | 0/0/0 | 189,848/46,882 | einfracz / qwen3.8-27b | 15 | 2/4 | 6/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.333). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Hendrickx_2003_reference](drugs/drug_desflurane/Desflurane_Hendrickx2003_reference.md) | — | 1-compartment (no model) | 0 | Hendrickx JF et al., Isoflurane and desflurane uptake during…, Anesthesia and analgesia (2003) | [10.1097/00000539-200302000-00011](https://doi.org/10.1097/00000539-200302000-00011) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--orange" title="a second model re-read this paper; the two readings agree on 0.0 of the compared fields. Primary extraction retained.">cross-check: partial</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Hendrickx_2006_reference](drugs/drug_desflurane/Desflurane_Hendrickx2006_reference.md) | — | 1-compartment (no model) | 0 | Hendrickx JF et al., Do distribution volumes and clearances…, BMC anesthesiology (2006) | [10.1186/1471-2253-6-7](https://doi.org/10.1186/1471-2253-6-7) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.25). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Wissing_2000_reference](drugs/drug_desflurane/Desflurane_Wissing2000_reference.md) | — | 1-compartment (no model) | 2 | Wissing H et al., Pharmacokinetics of inhaled anaesthetic…, British journal of anaesthe… (2000) | [10.1093/oxfordjournals.bja.a013467](https://doi.org/10.1093/oxfordjournals.bja.a013467) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Kreuer_2009_BIS](drugs/drug_desflurane/pd_Kreuer_2009_BIS.md) | Bispectral index ← desflurane · direct sigmoid Emax (Hill) effect | — | Kreuer S et al., Comparative pharmacodynamic modeling of…, Journal of clinical monitor… (2009) | [10.1007/s10877-009-9196-6](https://doi.org/10.1007/s10877-009-9196-6) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Kreuer_2009_Narcotrend_index](drugs/drug_desflurane/pd_Kreuer_2009_Narcotrend_index.md) | Narcotrend index ← desflurane · direct sigmoid Emax (Hill) effect | — | Kreuer S et al., Comparative pharmacodynamic modeling of…, Journal of clinical monitor… (2009) | [10.1007/s10877-009-9196-6](https://doi.org/10.1007/s10877-009-9196-6) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Onishi_2025_EPSP_slope](drugs/drug_desflurane/pd_Onishi_2025_EPSP_slope.md) | excitatory postsynaptic potential slope ← desflurane · direct sigmoid Emax (Hill) effect | — | Onishi K et al., Environmental enrichment enhances anest…, Frontiers in pharmacology (2025) | [10.3389/fphar.2025.1732630](https://doi.org/10.3389/fphar.2025.1732630) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Onishi_2025_PS](drugs/drug_desflurane/pd_Onishi_2025_PS.md) | population spike amplitude ← desflurane · direct sigmoid Emax (Hill) effect | — | Onishi K et al., Environmental enrichment enhances anest…, Frontiers in pharmacology (2025) | [10.3389/fphar.2025.1732630](https://doi.org/10.3389/fphar.2025.1732630) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Rehberg_1999_SEF95](drugs/drug_desflurane/pd_Rehberg_1999_SEF95.md) | spectral edge frequency at the 95th percentile of the power spectrum ← desflurane · direct sigmoid Emax (Hill) effect | — | Rehberg B et al., Comparative pharmacodynamic modeling of…, Anesthesiology (1999) | [10.1097/00000542-199908000-00013](https://doi.org/10.1097/00000542-199908000-00013) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Cheung_2020_BIS](drugs/drug_desflurane/pd_Cheung_2020_BIS.md) | bispectral index ← desflurane · direct sigmoid Emax (Hill) effect | — | Cheung YM et al., Monitoring Depth of Hypnosis: Mid-Laten…, Anesthesia and analgesia (2020) | [10.1213/ANE.0000000000003546](https://doi.org/10.1213/ANE.0000000000003546) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Cheung_2020_aepEX](drugs/drug_desflurane/pd_Cheung_2020_aepEX.md) | aepEXplus monitor index values ← desflurane · direct sigmoid Emax (Hill) effect | — | Cheung YM et al., Monitoring Depth of Hypnosis: Mid-Laten…, Anesthesia and analgesia (2020) | [10.1213/ANE.0000000000003546](https://doi.org/10.1213/ANE.0000000000003546) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=desflurane).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| distribution | blood | `ALB` binder | DrugBank actor |
| metabolism | liver | `CYP2E1` substrate | DrugBank actor |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | lung | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: ATP2C1 (inhibitor), ATP5F1D (other/unknown), GABRA1 (positive allosteric modulator), GLRA1 (target), GRIA1 (target), KCNA1 (inducer), MT-ND1 (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 49 matched, 20 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 3  ·  extracted 0  ·  needs_review 0  ·  rejected 3  ·  stale 1
- **scholar-agent fallback query used:** not captured

## Full-text requests

_4 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Wissing_2000.pdf` | Wissing H et al., Pharmacokinetics of inhaled anaesthetic…, British journal of anaesthe… (2000) | popPK | 10 | [10.1093/oxfordjournals.bja.a013467](https://doi.org/10.1093/oxfordjournals.bja.a013467) | [10823093](https://pubmed.ncbi.nlm.nih.gov/10823093) | The study reports quantitative two-compartment pharmacokinetic parameters (volume of distribution and intercompartmental clearance) for desflurane in humans. |
| `Hendrickx_2003.pdf` | Hendrickx JF et al., Isoflurane and desflurane uptake during…, Anesthesia and analgesia (2003) | popPK | 8 | [10.1097/00000539-200302000-00011](https://doi.org/10.1097/00000539-200302000-00011) | [12538177](https://pubmed.ncbi.nlm.nih.gov/12538177) | The study quantifies desflurane uptake using specific biexponential mathematical models with explicit parameter values for human liver resection and transplantation. |
| `Brosnan_2006.pdf` | Brosnan RJ et al., Pharmacokinetics of inhaled anesthetics…, American journal of veterin… (2006) | popPK | 7 | [10.2460/ajvr.67.10.1670](https://doi.org/10.2460/ajvr.67.10.1670) | [17014314](https://pubmed.ncbi.nlm.nih.gov/17014314) | The study reports a 2-compartment model for desflurane in green iguanas, but no numeric parameter values (CL, V, etc.) are present in the provided evidence. |
| `Rehberg_1999.pdf` | Rehberg B et al., Comparative pharmacodynamic modeling of…, Anesthesiology (1999) | popPK | 5 | [10.1097/00000542-199908000-00013](https://doi.org/10.1097/00000542-199908000-00013) | [10443602](https://pubmed.ncbi.nlm.nih.gov/10443602) | This is a pharmacodynamic study reporting EC50 and Ke0, lacking quantitative pharmacokinetic disposition parameters (CL, V, Q) for desflurane. |

<sub>queue written 2026-10-07T04:09:51.121479+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Brosnan_2006 | relevant | 7 | 0 | The study reports a 2-compartment model for desflurane in green iguanas, but no numeric parameter values (CL, V, etc.) are present in the provided evidence. |
| popPK | Cheung_2020 | irrelevant | 1 | 0 | The study evaluates a depth of hypnosis monitor (aepEX) using desflurane as an anesthetic agent; it does not report pharmacokinetic parameters (CL, V, etc.) for desflurane itself. |
| popPK | Cho_2012 | irrelevant | 0 | 0 | The study focuses on the pharmacodynamics of remifentanil (EC50/EC95 for cough prevention) while using desflurane only as a background anesthetic agent, providing no PK parameters for desflurane. |
| popPK | Kim_2018 | irrelevant | 0 | 0 | The study investigates the pharmacodynamics of remifentanil (specifically its effect-site concentration to prevent cough) using desflurane as a comparator anesthetic, not the pharmacokinetics of desflurane itself. |
| popPK | Kreuer_2006 | irrelevant | 1 | 0 | This is a clinical monitoring study using pharmacokinetic models to predict anesthetic endpoints, not a study reporting new quantitative PK parameter values (CL, V, etc.) for desflurane. |
| popPK | Kreuer_2007 | irrelevant | 1 | 0 | The text is a qualitative review discussing model types and relative kinetics without reporting specific quantitative PK parameter values for desflurane. |
| popPK | Kreuer_2008 | irrelevant | 2 | 0 | The study focuses on pharmacodynamic modeling of EEG responses (BIS/Narcotrend) to desflurane, not the extraction of quantitative population-pharmacokinetic disposition parameters (CL, V, Q, ka) for desflurane itself. |
| popPK | Kreuer_2009 | relevant | 4 | 8 | The study reports a quantitative population pharmacodynamic parameter (ke0) for desflurane, but lacks the primary disposition parameters (CL, V, Q) specified in the relevance criteria. |
| popPK | Ngamprasertwong_2016 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for propofol, not desflurane; desflurane is only mentioned as a co-administered anesthetic agent. |
| popPK | Nishikawa_2003 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on GABA receptor binding and potentiation, not a pharmacokinetic study. |
| popPK | Onishi_2025 | irrelevant | 0 | 0 | The study is an in vitro electrophysiological investigation of anesthetic pharmacodynamics (IC50, potency) in rat brain slices, not a pharmacokinetic study reporting disposition parameters like clearance, volume, or half-life. |
| popPK | Park_2015 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of desflurane's effect on transporter activity in Xenopus oocytes and does not report pharmacokinetic parameters. |
| popPK | Peyton_2020 | irrelevant | 1 | 0 | The study focuses on ventilation-perfusion inequality and alveolar deadspace using partial pressure gradients, not on quantitative pharmacokinetic disposition parameters like clearance or volume of distribution. |
| popPK | Peyton_2025 | irrelevant | 2 | 0 | This is a pulmonary gas exchange modeling study, not a population pharmacokinetic study, and it does not report standard PK parameters (CL, V, Q, ka) for desflurane. |
| popPK | Rehberg_1999 | irrelevant | 5 | 1 | This is a pharmacodynamic study reporting EC50 and Ke0, lacking quantitative pharmacokinetic disposition parameters (CL, V, Q) for desflurane. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 04:11 UTC</sub>
