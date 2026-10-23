<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B05C&quot;,&quot;href&quot;:&quot;atc/B05C.md&quot;},{&quot;label&quot;:&quot;nitrofural&quot;}]"></div>

# nitrofural

- **generic name:** nitrofural
- **ATC codes:** `B05CA03`, `D08AF01`, `D09AA03`, `P01CC02`, `S01AX04`, `S02AA02`
- **DrugBank:** [DB00336](https://go.drugbank.com/drugs/DB00336) · **PubChem:** not captured
- **groups:** approved, vet_approved, withdrawn

## About

Nitrofural (nitrofurazone) is a nitrofuran antibacterial used as a topical antiseptic for wounds, burns, and skin, eye, and ear infections. It has been withdrawn from human use in some countries over safety concerns, but remains approved for topical use and in veterinary medicine elsewhere.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q103964761](https://www.wikidata.org/wiki/Q103964761) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=nitrofural).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | `XDH` substrate | DrugBank actor |
| metabolism | small intestine | `XDH` substrate | DrugBank actor |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 00:32 | 0:47 | 0/0/0 | 0/0/0 | 0/0/0 | 32,295/825 | ollama / qwen3.8:27b-mtp-q8_0 | 5 | 2/6 | 4/0 | 0 |

## Coverage

- **PubMed hits:** 26 matched, 25 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Kazmi_2022.pdf` | Kazmi SSUH et al., A community-based approach to analyzing…, Marine pollution bulletin (2022) | pd | 5 | [10.1016/j.marpolbul.2021.113165](https://doi.org/10.1016/j.marpolbul.2021.113165) | [34839952](https://www.ncbi.nlm.nih.gov/pubmed/34839952) | metadata signals extractable PD data (IC50) |
| `Chen_2022.pdf` | Chen L et al., Inhibition of Escherichia coli nitrored…, Chinese journal of natural… (2022) | pd | 4 | [10.1016/S1875-5364(22)60163-8](https://doi.org/10.1016/S1875-5364(22)60163-8) | [35907649](https://www.ncbi.nlm.nih.gov/pubmed/35907649) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-10-06T00:31:36.871611+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Chen_2022 | irrelevant | 0 | 0 | no_text gate: only 88 chars of text extracted (&lt; 400) |
| PD | Chen_2022 | not_relevant | 0 | 0 | The paper investigates the inhibition of nitroreductase by Syzygium aromaticum constituents, not the pharmacodynamics of nitrofural. |
| popPK | EFSA_2020 | irrelevant | 0 | 0 | The paper is a risk assessment regarding post-mortem inspection delays in ungulates and does not contain any pharmacokinetic data or parameters for nitrofural. |
| PD | EFSA_2020 | not_relevant | 0 | 0 | The paper discusses the impact of delayed post-mortem inspection on the detection of pathogens and chemical contaminants, including potential degradation of pharmacologically active substances, but does not report any pharmacodynamic or exposure-response data for nitrofural. |
| popPK | Gbedema_2010 | irrelevant | 0 | 0 | The paper studies the wound healing properties of a plant extract, using nitrofurazone (not nitrofural) only as a topical comparator, and contains no pharmacokinetic data. |
| PD | Gbedema_2010 | not_relevant | 0 | 0 | The paper studies the pharmacological effects of a plant extract (Clerodendron splendens) and uses nitrofurazone only as a positive control; it does not report a pharmacodynamic or exposure-response relationship for nitrofural/nitrofurazone itself. |
| popPK | Greenaway_1986 | irrelevant | 0 | 0 | The paper is an in-vitro embryotoxicity study focusing on malformation mechanisms and does not report any pharmacokinetic parameters for nitrofural. |
| PGx | Hasan_2018 | not_relevant | 0 | 0 | The paper focuses on toxicogenomic biomarker gene expression and dose prediction for chemical compounds, not on pharmacogenomic effects on PK/PD parameters of nitrofural. |
| PGx | Hasan_2019 | not_relevant | 0 | 0 | The paper proposes a statistical method for clustering drug toxicity data and does not report pharmacogenomic effects on PK/PD parameters for nitrofural. |
| PGx | Hasan_2025 | not_relevant | 0 | 0 | The paper focuses on a computational method for toxicogenomic co-clustering and does not report pharmacogenomic effects on PK/PD parameters for nitrofural. |
| popPK | Hong_2015 | irrelevant | 0 | 0 | The study focuses on ecotoxicology and biomarkers in protozoa exposed to nitrofurazone, not pharmacokinetic parameters for nitrofural. |
| popPK | Hong_2017 | irrelevant | 0 | 0 | The study focuses on ecotoxicity and biomarkers (enzyme activity) in protozoa, not pharmacokinetic parameters for nitrofural. |
| popPK | Jauréguiberry_2005 | irrelevant | 0 | 0 | The paper is a clinical retrospective study of leptospirosis patients and does not contain any pharmacokinetic data for nitrofural. |
| PD | Jauréguiberry_2005 | not_relevant | 0 | 0 | The paper is a retrospective clinical study of leptospirosis patients and does not contain any pharmacokinetic or pharmacodynamic data for nitrofural. |
| popPK | Kazmi_2022 | irrelevant | 0 | 0 | no_text gate: only 98 chars of text extracted (&lt; 400) |
| PD | Kazmi_2022 | not_relevant | 0 | 0 | The paper focuses on ecotoxicity of nitrofurazone in protozoa, not pharmacodynamics in humans or animals. |
| popPK | Li_2014 | irrelevant | 0 | 0 | The study focuses on ecotoxicity biomarkers (catalase activity/mRNA) in protozoa exposed to nitrofurazone, not pharmacokinetic parameters for nitrofural. |
| popPK | Macri_1984 | irrelevant | 0 | 0 | The study is an ecotoxicological evaluation of nitrofurazone (not nitrofural) in algae, crustaceans, and flies, reporting toxicity endpoints (EC50) rather than pharmacokinetic parameters. |
| popPK | Mao_2026 | irrelevant | 0 | 0 | The paper is a Mendelian randomization study on diabetic nephropathy genes and only mentions nitrofural as a potential drug target in a molecular docking prediction, without reporting any pharmacokinetic parameters. |
| PD | Mao_2026 | not_relevant | 0 | 0 | The paper is a Mendelian randomization and molecular docking study; it mentions nitrofural only as a predicted drug target via docking, with no pharmacodynamic, exposure-response, or dose-response data or parameters. |
| PGx | PMID36049896_2023 | not_relevant | 0 | 0 | The paper discusses G6PD genotype and medication use guidelines, but does not report pharmacokinetic or pharmacodynamic parameters for nitrofural. |
| popPK | Pereira_2025 | irrelevant | 0 | 0 | The paper is a review of hydrazone scaffolds for anti-leishmanial activity and does not report pharmacokinetic parameters for nitrofural. |
| PD | Pereira_2025 | not_relevant | 0 | 0 | The paper is a structural review of hydrazone scaffolds and does not report any pharmacodynamic modeling, exposure-response analysis, or numeric PD parameters for nitrofural. |
| popPK | Santiago_2020 | irrelevant | 0 | 0 | The paper is an in-vitro antitrypanosomal activity study of novel derivatives, not a pharmacokinetic study, and contains no PK parameters for nitrofural. |
| PD | Santiago_2020 | not_relevant | 2 | 2 | The paper reports a single IC50 value for a novel derivative, which is a standard pharmacological potency metric, but does not provide a full dose-response curve, PK/PD model, or exposure-response relationship required for extractable PD parameters. |
| popPK | Teshome_2022 | irrelevant | 0 | 0 | The paper is a wound healing and anti-inflammatory study where nitrofurazone is used only as a positive control, with no pharmacokinetic parameters reported. |
| PD | Teshome_2022 | not_relevant | 0 | 0 | The paper evaluates a plant extract (Clematis simensis) and uses nitrofurazone only as a positive control; it does not report pharmacodynamic or exposure-response parameters for nitrofural. |
| popPK | Trossini_2010 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of cruzain inhibition and does not report pharmacokinetic parameters for nitrofural. |
| popPK | Vlastos_2010 | irrelevant | 0 | 0 | The paper investigates the genotoxic effects of semicarbazide, a metabolite of nitrofurazone, and does not report any pharmacokinetic parameters for nitrofural. |
| PD | Vlastos_2010 | not_relevant | 0 | 0 | The paper investigates the genotoxicity of semicarbazide, not nitrofural, and reports cytogenetic endpoints without deriving pharmacodynamic parameters for the target drug. |
| popPK | Workman_1982 | irrelevant | 0 | 0 | The paper is a structure-activity relationship study on chemosensitization of tumours by nitroimidazoles and nitrofurans, not a pharmacokinetic study, and it reports no quantitative PK parameters (CL, V, ka, etc.) for nitrofural. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09)</sub>
