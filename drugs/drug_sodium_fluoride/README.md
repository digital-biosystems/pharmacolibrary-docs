<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A01A&quot;,&quot;href&quot;:&quot;atc/A01A.md&quot;},{&quot;label&quot;:&quot;sodium fluoride&quot;}]"></div>

# sodium fluoride

- **generic name:** sodium fluoride
- **ATC codes:** `A01AA01`, `A12CD01`
- **DrugBank:** [DB09325](https://go.drugbank.com/drugs/DB09325) · **PubChem:** [CID 5235](https://pubchem.ncbi.nlm.nih.gov/compound/5235)
- **molar mass:** 41.9882 g/mol (FNa) — DrugBank
- **groups:** approved, investigational

## About

Sodium fluoride is a fluoride salt used to prevent tooth decay (dental caries). It is an approved drug, used mainly in stomatological preparations as a caries prophylactic, and also available as a mineral supplement.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q407520](https://www.wikidata.org/wiki/Q407520) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-04 03:32 | 1:57 | 0/1/0 | 0/0/0 | 0/0/0 | 71,776/1,789 | ollama / qwen3.8:27b-mtp-q8_0 | 8 | 3/5 | 8/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.2). Primary extraction retained.">cross-check: disputed</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Setnikar_1990_reference](drugs/drug_sodium_fluoride/SodiumFluoride_Setnikar1990_reference.md) | — | 1-compartment (no model) | 3 | Setnikar I et al., Relative bioavailability of fluoride fr…, Arzneimittel-Forschung (1990) | — |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 41 matched, 24 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 1
- **scholar-agent fallback query used:** not captured

## Full-text requests

_5 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Setnikar_1990.pdf` | Setnikar I et al., Relative bioavailability of fluoride fr…, Arzneimittel-Forschung (1990) | popPK | 9 | not captured | [2346544](https://pubmed.ncbi.nlm.nih.gov/2346544) | The study reports quantitative pharmacokinetic parameters (Cmax, tmax, half-lives, AUC-based bioavailability) for fluoride from sodium fluoride and sodium monofluorophosphate in humans, consistent with a two-compartment model. |
| `Ramkumar_1991.pdf` | Ramkumar V et al., Distinct pathways of desensitization of…, Molecular pharmacology (1991) | pd | 5 | not captured | [1944235](https://www.ncbi.nlm.nih.gov/pubmed/1944235) | metadata signals extractable PD data (EC50) |
| `Godfrey_1989.pdf` | Godfrey PP et al., Subacute and chronic in vivo lithium tr…, Journal of neurochemistry (1989) | pd | 4 | [10.1111/j.1471-4159.1989.tb09148.x](https://doi.org/10.1111/j.1471-4159.1989.tb09148.x) | [2536074](https://www.ncbi.nlm.nih.gov/pubmed/2536074) | metadata signals extractable PD data (EC50) |
| `Graier_1990.pdf` | Graier WF et al., Effect of sodium fluoride on cytosolic…, Cellular signalling (1990) | pd | 4 | [10.1016/0898-6568(90)90067-k](https://doi.org/10.1016/0898-6568(90)90067-k) | [2174691](https://www.ncbi.nlm.nih.gov/pubmed/2174691) | metadata signals extractable PD data (EC50) |
| `van_1999.pdf` | van den Broek PJ et al., Intracellular activity of trovafloxacin…, The Journal of antimicrobia… (1999) | pd | 4 | [10.1093/jac/44.2.193](https://doi.org/10.1093/jac/44.2.193) | [10473225](https://www.ncbi.nlm.nih.gov/pubmed/10473225) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-10-04T03:31:54.944169+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Adeagbo_2003 | irrelevant | 0 | 0 | The study investigates the pharmacodynamic effects of NS-398 on rat aorta, using sodium fluoride only as a non-pharmacokinetic control agent for contraction. |
| PD | Adeagbo_2003 | not_relevant | 0 | 0 | The paper studies the pharmacodynamics of NS-398 (a COX-2 inhibitor) on rat aorta, and sodium fluoride is only mentioned as a negative control agonist that was not affected by the drug; no PD relationship or parameters for sodium fluoride are reported. |
| popPK | Alves_2007 | irrelevant | 0 | 0 | The study is a materials science investigation into the corrosion resistance of a titanium alloy in mouthwashes, not a pharmacokinetic study of sodium fluoride. |
| popPK | Bhattacharjee_2024 | irrelevant | 0 | 0 | The study uses 18F-NaF as a PET imaging tracer to assess bone remodeling in osteoarthritis, not as a therapeutic drug for pharmacokinetic analysis. |
| popPK | Clausen_2015 | irrelevant | 0 | 0 | The study investigates the phytotoxicity and uptake of fluoride in willow trees (plants), not the pharmacokinetics of sodium fluoride in humans or animals. |
| PD | Clausen_2015 | not_relevant | 0 | 0 | The paper focuses on phytotoxicity and fluoride uptake in willow trees, which is an ecological/toxicological study, not a pharmacodynamic (drug-response) analysis for a therapeutic agent. |
| popPK | Cohen_1994 | irrelevant | 0 | 0 | The study is a clinical trial assessing the anticalculus efficacy of a dentifrice, not a pharmacokinetic study, and reports no disposition parameters for sodium fluoride. |
| popPK | Dibbasey_2024 | irrelevant | 0 | 0 | The study compares glucose measurement stability in sodium fluoride tubes versus serum separator tubes and does not report pharmacokinetic parameters for sodium fluoride. |
| popPK | Discigil_2008 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological experiment using sodium fluoride as a probe to assess endothelial function, not a pharmacokinetic study of sodium fluoride. |
| PGx | Dubbels_1983 | not_relevant | 0 | 0 | The paper studies the metabolism of benoxinate, not sodium fluoride; sodium fluoride is only mentioned as an inhibitor of the enzyme. |
| PGx | Edamadaka_2024 | not_relevant | 0 | 0 | The paper is a clinical case report on diagnostic imaging using [18F]NaF-PET/CT and does not investigate pharmacogenomic effects on pharmacokinetics or pharmacodynamics. |
| popPK | Godfrey_1989 | irrelevant | 0 | 0 | no_text gate: only 139 chars of text extracted (&lt; 400) |
| PD | Godfrey_1989 | not_relevant | 0 | 0 | The paper investigates the effect of lithium on sodium fluoride-stimulated inositol phosphate production, not the pharmacodynamic dose-response relationship of sodium fluoride itself. |
| popPK | Goh_2003 | irrelevant | 0 | 0 | The study is a teratogenicity assay (FETAX) in Xenopus embryos reporting developmental toxicity endpoints (LC50, EC50), not pharmacokinetic disposition parameters. |
| popPK | Graier_1990 | irrelevant | 0 | 0 | no_text gate: only 102 chars of text extracted (&lt; 400) |
| popPK | He_2024 | irrelevant | 0 | 0 | The study is a clinical trial analyzing gingival bleeding outcomes for stannous fluoride dentifrices, not a pharmacokinetic study of sodium fluoride. |
| popPK | Ramkumar_1991 | irrelevant | 0 | 0 | no_text gate: only 89 chars of text extracted (&lt; 400) |
| PD | Ramkumar_1991 | not_relevant | 0 | 0 | The paper focuses on adenosine receptor desensitization in DDT1 MF-2 cells and does not mention sodium fluoride or report any exposure-response or dose-response data for it. |
| popPK | Ratz_1990 | irrelevant | 0 | 0 | The study is a mechanistic investigation of vascular smooth muscle contraction in rabbit femoral arteries, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Sachpekidis_2014 | irrelevant | 2 | 5 | The study reports tissue kinetic parameters (k1, k3, VB) for the radiotracer (18)F-NaF in bone lesions, which is a diagnostic imaging application rather than a systemic pharmacokinetic study of sodium fluoride as a therapeutic drug. |
| popPK | Sachpekidis_2020 | irrelevant | 2 | 1 | The study uses 18F-NaF as a diagnostic imaging tracer for multiple myeloma and reports compartmental parameters (K1, k2, etc.) for bone uptake, but does not report systemic pharmacokinetic disposition parameters (CL, V, half-life) for sodium fluoride as a therapeutic drug. |
| popPK | Watkins_2021 | irrelevant | 2 | 1 | The study reports PET kinetic parameters (K1, Ki) for [18F]sodium fluoride as a diagnostic imaging tracer for bone metabolism, not systemic pharmacokinetic disposition parameters (CL, Vd) for sodium fluoride as a therapeutic drug. |
| popPK | Watkins_2022 | irrelevant | 0 | 0 | The study uses [18F]sodium fluoride as a PET imaging tracer to assess bone metabolism and joint function, not to characterize the pharmacokinetic disposition parameters (CL, V, etc.) of the drug itself. |
| popPK | Yang_2010 | irrelevant | 0 | 0 | The study is a mechanistic pharmacology investigation of calcium sensitization in permeabilized rat arteries, not a pharmacokinetic study, and reports no disposition parameters (CL, V, ka, etc.) for sodium fluoride. |
| PGx | Zander_2013 | not_relevant | 0 | 0 | The paper describes a bioanalytical method for Ko143 and mentions sodium fluoride only as a preservative in collection tubes, not as the drug of interest or in the context of pharmacogenomics. |
| popPK | van_1999 | irrelevant | 0 | 0 | no_text gate: only 69 chars of text extracted (&lt; 400) |
| PD | van_1999 | not_relevant | 0 | 0 | The paper discusses trovafloxacin, not sodium fluoride, and does not report PD parameters for the target drug. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-04 03:32 UTC</sub>
