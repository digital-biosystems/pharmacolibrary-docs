<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A05A&quot;,&quot;href&quot;:&quot;atc/A05A.md&quot;},{&quot;label&quot;:&quot;linerixibat&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Linerixibat_ZamekGliszczynski2021_reference&quot;,&quot;label&quot;:&quot;Zamek-Gliszczynski_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_linerixibat/Linerixibat_ZamekGliszczynski2021_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# linerixibat

- **generic name:** linerixibat
- **ATC codes:** `A05AX08`
- **DrugBank:** [DB11729](https://go.drugbank.com/drugs/DB11729) · **PubChem:** [CID 53492727](https://pubchem.ncbi.nlm.nih.gov/compound/53492727)
- **molar mass:** 546.68 g/mol (C28H38N2O7S) — DrugBank
- **groups:** investigational

## About

Linerixibat is an investigational bile acid inhibitor being studied for cholestatic itching associated with liver disease. It is not yet approved and remains under clinical investigation.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q27256749](https://www.wikidata.org/wiki/Q27256749) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-04 14:27 | 1:24 | 1/0/0 | 1/0/0 | 0/0/0 | 59,216/1,541 | ollama / qwen3.8:27b-mtp-q8_0 | 3 | 0/3 | 3/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (partly confirmed, agreement 0.333). Primary extraction retained.">cross-check: partial</span><br><sub>STALE — current validate: extracted</sub><br><sub>route_to: `engineer_replication`</sub> | [Zamek-Gliszczynski_2021_reference](drugs/drug_linerixibat/Linerixibat_ZamekGliszczynski2021_reference.md) | ▶ model + simulator | 1-compartment, IV | 5 | Zamek-Gliszczynski MJ et al., Pharmacokinetics and ADME Characterizat…, Drug metabolism and disposi… (2021) | [10.1124/dmd.121.000595](https://doi.org/10.1124/dmd.121.000595) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">accepted (caveats)</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.889). Primary extraction retained.">cross-check: disputed</span> | [Carreño_2025_C4](drugs/drug_linerixibat/pd_Carre_o_2025_C4.md) | C4 ← linerixibat · indirect response — drug stimulates the production of C4 | model (no simulator) | Carreño F et al., Analysis of C4 Concentrations to Predic…, CPT: pharmacometrics & syst… (2025) | [10.1002/psp4.13300](https://doi.org/10.1002/psp4.13300) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 14 matched, 14 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 1  ·  needs_review 0  ·  rejected 0  ·  stale 1
- **scholar-agent fallback query used:** True

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Zamek-Gliszczynski_2021.pdf` | Zamek-Gliszczynski MJ et al., Pharmacokinetics and ADME Characterizat…, Drug metabolism and disposi… (2021) | popPK | 10 | [10.1124/dmd.121.000595](https://doi.org/10.1124/dmd.121.000595) | [34625435](https://pubmed.ncbi.nlm.nih.gov/34625435) | The abstract explicitly reports quantitative PK parameters including clearance (61.9 l/h), volume of distribution (16.3 l), and half-lives for linerixibat in humans. |
| `Karatza_2024.pdf` | Karatza E et al., Serum bile acid change correlates with…, Liver international : offic… (2024) | pd | 4 | [10.1111/liv.15982](https://doi.org/10.1111/liv.15982) | [38780109](https://www.ncbi.nlm.nih.gov/pubmed/38780109) | metadata signals extractable PD data (pharmacodynamicmodel) |

<sub>queue written 2026-10-04T14:26:24.125581+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Billo_2025 | irrelevant | 0 | 0 | The paper is an in-vitro transporter inhibition study (IC50 values) and does not report pharmacokinetic disposition parameters (CL, V, t1/2) for linerixibat. |
| popPK | Carreño_2024 | irrelevant | 2 | 0 | The paper describes a kinetic-pharmacodynamic (k-PD) analysis for dose selection but does not report quantitative population pharmacokinetic parameters (CL, V, Q, ka) for linerixibat in the provided evidence. |
| popPK | Carreño_2025 | irrelevant | 2 | 0 | The study models the pharmacodynamics of the biomarker C4 (a bile acid synthesis intermediate) rather than the pharmacokinetics of linerixibat itself, explicitly noting that plasma PK data are unavailable due to low bioavailability. |
| popPK | Karatza_2024 | irrelevant | 0 | 0 | The provided evidence contains only the title of a clinical study focusing on pruritus and bile acid changes, with no pharmacokinetic parameters or numeric values for linerixibat. |
| popPK | Levy_2023 | irrelevant | 0 | 0 | The paper is a Phase 2b clinical efficacy trial for pruritus and does not report any pharmacokinetic parameters or disposition data for linerixibat. |
| popPK | Tanaka_2023 | irrelevant | 0 | 0 | The paper is a clinical efficacy and safety analysis (Phase IIb) reporting itch scores and adverse events, with no pharmacokinetic parameters or disposition data for linerixibat. |
| PD | Tanaka_2023 | not_relevant | 3 | 2 | The paper reports clinical dose-response outcomes (itch score reduction) and mentions PD biomarkers qualitatively, but does not provide numeric PD parameters (e.g., Emax, EC50) or concentration-effect curves. |
| PGx | Zamek-Gliszczynski_2021 | not_relevant | 0 | 0 | The study characterizes the PK of linerixibat in healthy volunteers but does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| popPK | Zhou_2026 | irrelevant | 0 | 0 | Linerixibat is used only as an ASBT inhibitor to probe the transport mechanism of andrographolide, not as the subject drug for PK parameter estimation. |
| popPK | unknown_2025 | irrelevant | 0 | 0 | The paper focuses on pharmacodynamic biomarkers and mediators of pruritus, not pharmacokinetic disposition parameters. |
| PD | unknown_2025 | not_relevant | 0 | 0 | The provided text is only the title of the paper and does not contain the full text, data, or numeric PD parameters required to assess the exposure-response relationship. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-04 14:26 UTC</sub>
