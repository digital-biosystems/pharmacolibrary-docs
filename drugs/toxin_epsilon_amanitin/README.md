<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Fungal toxins&quot;,&quot;href&quot;:&quot;toxins/FUNG.md&quot;},{&quot;label&quot;:&quot;epsilon-Amanitin&quot;}]"></div>

# epsilon-Amanitin

- **generic name:** epsilon-Amanitin
- **T3DB:** [T3D3587](http://www.t3db.ca/toxins/T3D3587) · **PubChem:** [CID 57473119](https://pubchem.ncbi.nlm.nih.gov/compound/57473119)

## About

epsilon-Amanitin is one of a group of at least eight Amatoxins found in several genera of poisonous mushrooms, most notably Amanita phalloides and several other members of the genus Amanita, as well as some Conocybe, Galerina and Lepiota mushroom species.

- **Category:** Fungal Toxin, Natural Toxin
- **Route of exposure:** oral, dermal, inhalation, and parenteral (contaminated drugs).
- **Sources and uses:** Amatoxins are a subgroup of at least eight toxic compounds found in several genera of poisonous mushrooms, most notably Amanita phalloides and several other members of the genus Amanita, as well as some Conocybe, Galerina and Lepiota mushroom species.
- **Mechanism of toxicity:** The major toxic mechanism of amatoxins is the inhibition of RNA polymerase II, a vital enzyme in the synthesis of messenger RNA (mRNA), microRNA, and small nuclear RNA (snRNA). Without mRNA, essential protein synthesis, and hence cell metabolism, grind to a halt and the cell dies.
- **Health effects:** Amatoxins cause liver damage. They may also affect the kidneys. …
- **Lethal dose:** 0.1 mg/kg for an adult human.
- **Acute toxicity:** LD50: 0.3-0.6 mg/kg (Mouse)
- **Treatment:** Treatment involves high dose penicillin as well as supportive care in cases of hepatic and renal injury. …

<p><small>Toxicology facts: <a href="http://www.t3db.ca/toxins/T3D3587">T3DB T3D3587</a> (free for non-commercial use with attribution), quoted in part; reference markers removed; the description above is T3DB's too.</small></p>

<p><small>Also: CAS 21705-02-2</small></p>

## popPK records

_not available_

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-19 00:11 | 3:26 | 0/0/0 | 0/0/0 | 0/0/0 | 43,865/2,807 | einfracz / qwen3.8-flash-next | 2 | 0/2 | 2/0 | 0 |

## Coverage

- **PubMed hits:** 15 matched, 15 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Park_2021.pdf` | Park R et al., Pharmacokinetics of α-amanitin in mice…, Journal of toxicology and e… (2021) | popPK | 10 | [10.1080/15287394.2021.1944942](https://doi.org/10.1080/15287394.2021.1944942) | [34187333](https://pubmed.ncbi.nlm.nih.gov/34187333) | The paper reports quantitative pharmacokinetic parameters (clearance, bioavailability, tissue/plasma ratios) for alpha-amanitin, not epsilon-amanitin, so the subject substance is incorrect. |
| `Sun_2018.pdf` | Sun J et al., Toxicity and toxicokinetics of Amanita…, Toxicon : official journal… (2018) | popPK | 9 | [10.1016/j.toxicon.2018.01.008](https://doi.org/10.1016/j.toxicon.2018.01.008) | [29341897](https://pubmed.ncbi.nlm.nih.gov/29341897) | The paper reports on the toxicokinetics of amatoxins in dogs, mentioning rapid absorption/elimination and urine excretion, but the provided evidence text lacks the specific numeric parameters (t1/2, Cmax, AUC, etc.) likely found in tables or figures not included here. |

<sub>queue written 2026-11-19 00:10 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Chun_1996 | irrelevant | 0 | 0 | The paper focuses on RNA polymerase II transcription mechanisms using alpha-amanitin as a resistant marker, not on epsilon-amanitin toxicokinetics. |
| popPK | Faulstich_1985 | irrelevant | 2 | 0 | The paper reports kinetic parameters for gamma-amanitin and O-methyl-dehydroxymethyl-alpha-amanitin, not epsilon-amanitin, and no numeric values for epsilon-amanitin are present in the evidence. |
| popPK | Fiume_1975 | irrelevant | 0 | 0 | no_text gate: only 373 chars of text extracted (&lt; 400) |
| popPK | Fricker_1996 | irrelevant | 0 | 0 | Alpha-amanitin (and thus epsilon-amanitin) is used only as a non-absorbed structural comparator/control in a study of octreotide absorption, with no quantitative toxicokinetic parameters reported for it. |
| popPK | Gallo_2021 | irrelevant | 1 | 0 | The paper discusses α-amanitin, not the subject substance epsilon_amanitin, and reports no quantitative kinetic parameters in the provided evidence. |
| popPK | Jaeger_1993 | irrelevant | 2 | 2 | The paper reports kinetics for alpha and beta-amanitin, not the subject substance epsilon-amanitin. |
| popPK | Khobta_2006 | irrelevant | 0 | 0 | The paper reports on the pharmacodynamic mechanism of alpha-amanitin (and the structurally distinct epsilon-amanitin context is absent) on RNA polymerase II in human cells, providing no quantitative toxicokinetic parameters like half-lives or clearance for epsilon-amanitin. |
| popPK | Margaroli_2021 | irrelevant | 0 | 0 | The paper uses alpha-amanitin as an experimental tool to block transcription in neutrophils and reports no toxicokinetic parameters (absorption, distribution, metabolism, excretion) for the substance. |
| popPK | Schlievert_1980 | irrelevant | 0 | 0 | The paper reports on the mechanism of action (inhibition of RNA synthesis) and endotoxin clearance effects of alpha-amanitin, but provides no quantitative toxicokinetic parameters such as half-lives, clearance rates, or partition coefficients. |
| popPK | Stenger_2010 | irrelevant | 0 | 0 | Epsilon-amanitin is used only as a pharmacological inhibitor to block transcription in a lipid metabolism study; no toxicokinetic parameters are reported. |
| popPK | Sun_2018 | relevant | 9 | 2 | The paper reports on the toxicokinetics of amatoxins in dogs, mentioning rapid absorption/elimination and urine excretion, but the provided evidence text lacks the specific numeric parameters (t1/2, Cmax, AUC, etc.) likely found in tables or figures not included here. |
| popPK | Yang_2024 | irrelevant | 0 | 0 | The paper reports toxicokinetics for alpha- and beta-amanitin, not epsilon-amanitin. |
| popPK | Yang_2026 | irrelevant | 0 | 0 | The paper uses alpha-amanitin merely as a transcriptional inhibitor tool in goat embryos and reports no toxicokinetic parameters for epsilon-amanitin. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bepsilon_amanitin%5D&body=Drug%3A%20epsilon_amanitin%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_epsilon_amanitin/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>
